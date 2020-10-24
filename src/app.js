/* eslint-disable no-new */
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

import router from './router'
import App from './App'

Vue.use(VueCompositionApi)

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})
