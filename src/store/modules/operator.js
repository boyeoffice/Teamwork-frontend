/* eslint-disable no-undef */
// import LocalStorage from '../../helpers/localstorage'
import baseSerivce from '../../services/api'

const state = {
    items: []
}

const actions = {
    fetchOperator ({ commit }, payload) {
        return new Promise((resolve, reject) => {
            baseSerivce.get('/operator/list').then((res) => {
                const data = res.data.data
                commit('setItems', { resource: 'operator', items: data }, { root: true })
                // resolve(res)
            }).catch((err) => {
                toastr.warning(err.response.data.message)
                reject(err)
            })
        })
    }
}

const getters = {
    listOperators (state) {
        return state.items
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters
}
