
import axios from 'axios'
import Nprogress from 'nprogress'

axios.interceptors.request.use(function (config) {
    Nprogress.start()
    return config
}, function (error) {
    console.error(error)
    return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
    Nprogress.done()
    return response
}, function (error) {
    console.error(error)
    return Promise.reject(error)
})
$(document).ajaxComplete(function (event, request, settings) {
    console.log(2)
    Nprogress.done()
})
$(document).ajaxStart(function () {
    Nprogress.start()
})
