// const webpack = require('webpack');
const mix = require('laravel-mix')

mix.setPublicPath('dist')

mix.disableSuccessNotifications()
mix.js('src/app.js', 'dist/js')
    .js('lib/vendor.js', 'dist/js')
// .sass('resources/sass/app.scss', 'public/css');
    .styles([
        'node_modules/admin-lte/plugins/fontawesome-free/css/all.css',
        'node_modules/admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.css',
        'node_modules/admin-lte/dist/css/adminlte.css',
        'node_modules/nprogress/nprogress.css',
        'node_modules/admin-lte/plugins/select2/css/select2.css',
        'node_modules/admin-lte/plugins/select2-bootstrap4-theme/select2-bootstrap4.css',
        'node_modules/admin-lte/plugins/toastr/toastr.css',
        'node_modules/vue-date-pick/dist/vueDatePick.css'
    ], 'dist/css/vendor.css')
mix.copyDirectory('node_modules/admin-lte/plugins/fontawesome-free/webfonts', 'dist/webfonts')

// mix.browserSync('teamwork.test')
mix.webpackConfig({
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    }
})
