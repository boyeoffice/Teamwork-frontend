import Vue from 'vue'

export default Vue.filter('dateformat', value => {
    return new Date(value).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
})
