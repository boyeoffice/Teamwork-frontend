/* eslint-disable no-undef */
import axios from 'axios'
import Nprogress from 'nprogress'
// import store from '../store/index'
import LocalStorage from '../helpers/localstorage'
import env from '../env'

// import '../lib/nprogress'

const baseURL = env.API_URL

const httpClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

httpClient.interceptors.request.use(
    function (config) {
        Nprogress.start()
        const token = LocalStorage.getItem('token') || ''

        // const method = config.method

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    function (err) {
        return Promise.reject(err)
    }
)

httpClient.interceptors.response.use(function (response) {
    Nprogress.done()
    return response
}, function (error) {
    // console.error(error)
    if (error.response.status === 401 || error.response.data.status === 'error') {
        Nprogress.done()
    }
    return Promise.reject(error)
})
$(document).ajaxComplete(function (event, request, settings) {
    // console.log(2)
    Nprogress.done()
})
$(document).ajaxStart(function () {
    Nprogress.start()
})

// set max timeout for API calls
httpClient.defaults.timeout = 20000

export default httpClient
