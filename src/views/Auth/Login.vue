<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo"><a><b>Team Work</b></a></div>
      <div class="card">
        <div class="card-body login-login-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <form @submit.prevent="login">
            <div class="form-group input-group mb-3"><input type="email" placeholder="Email" class="form-control" v-model="form.email"> <div class="input-group-append"><div class="input-group-text"><span class="fas fa-envelope"></span></div></div> <!----></div>
            <div class="input-group mb-3"><input type="password" placeholder="Password" class="form-control" v-model="form.password"> <div class="input-group-append"><div class="input-group-text"><span class="fas fa-lock"></span></div></div> <!----></div>
            <div class="social-auth-links text-center mb-3">
                <button v-if="isButton" type="submit" :disabled="!formValid" class="btn btn-block btn-danger">
                    Login
                </button>
                <button v-else :disabled="disabled" class="btn btn-danger btn-block">Login</button>
            </div>
            <div class="text-center"><span class="error invalid-feedback d-block"></span></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { reactive, computed } from '@vue/composition-api'
import baseService from '../../services/api'

const loginUser = (payload) => {
    return new Promise((resolve, reject) => {
        baseService.post('/auth/login', payload).then((res) => {
            resolve(res)
        }).catch((err) => reject(err))
    })
}
export default {
    setup (_, { root }) {
        const form = reactive({
            email: '',
            password: ''
        })
        let isButton = true
        const formValid = computed(() => {
            return Object.keys(form).every(field => {
                return form[field]
            })
        })
        function login () {
            isButton = false
            loginUser(form).then((res) => {
                root.$router.push('/')
            }).catch((err) => {
                isButton = true
                toastr.warning(err.response.data.message)
            })
        }
        return {
            form,
            login,
            formValid,
            isButton
        }
    }
}

</script>

<style>

</style>
