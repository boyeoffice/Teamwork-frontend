import LocalStorage from '../../helpers/localstorage'
import baseSerivce from '../../services/api'

const state = {
    user: null,
    isAuthResolved: false
}

const getters = {
    authUser (state) {
        return state.user || null
    },
    isAuthenticated (state) {
        return !!state.user
    }
}

const actions = {
    login ({ commit }, payload) {
        return new Promise((resolve, reject) => {
            baseSerivce.post('/auth/login', payload)
                .then((res) => {
                    console.log(res.data)
                    const token = res.data.token
                    // console.log(res.data)
                    commit('setAuthUser', res.data.user)
                    LocalStorage.setItem('token', token, 3600)
                    commit('setAuthState', true)
                    resolve(res)
                })
                .catch((err) => reject(err))
        })
    },
    getAuthUser ({ commit, getters }) {
        const authUser = getters.authUser
        const token = LocalStorage.getItem('token')

        if (authUser && !!token) {
            return Promise.resolve(authUser)
        } else if (authUser === null && !!token) {
            return baseSerivce.get('/profile').then((res) => {
                const user = res.data.data
                // const token = res.data.data.access_token
                // LocalStorage.setItem('token', token, 3600)
                commit('setAuthUser', user)
                commit('setAuthState', true)
                return user
            }).catch((err) => {
                commit('setAuthUser', null)
                commit('setAuthState', false)
                return err
            })
        } else {
            return false
        }
    },
    logout ({ commit }) {
        return new Promise(resolve => {
            LocalStorage.removeItem('token')
            commit('setAuthUser', null)
            commit('setAuthState', false)
            resolve(true)
        })
    }
}

const mutations = {
    setAuthUser (state, user) {
        return (state.user = user)
    },
    setAuthState (state, authState) {
        return (state.isAuthResolved = authState)
    }
}

export default {
    namespaced: true,
    actions,
    state,
    getters,
    mutations
}
