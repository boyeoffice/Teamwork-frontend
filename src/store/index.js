import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth
    },
    mutations: {
        setItems (state, { resource, items }) {
            state[resource].items = items
        }
    }
})
