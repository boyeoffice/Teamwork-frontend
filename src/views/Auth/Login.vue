<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo"><a><b>T40</b></a></div>
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
import { reactive, computed } from '@vue/composition-api'
import router from '../../router'
export default {
    setup (_, context) {
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
            // console.log(form.email)
            isButton = false
            router.push('/')
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
