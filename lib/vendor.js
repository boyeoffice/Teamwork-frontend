try {
    window.$ = window.jQuery = require('jquery')

    // require('bootstrap');
} catch (e) { }

require('admin-lte/plugins/select2/js/select2.js')
require('admin-lte/dist/js/adminlte.js')

window.toastr = require('admin-lte/plugins/toastr/toastr.min.js')
window.innerHeight = 800
window.toastr.options = {
    positionClass: 'toast-top-right',
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
}
