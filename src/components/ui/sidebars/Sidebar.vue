<template>
  <aside class="main-sidebar sidebar-light-danger elevation-4">
      <router-link to='/' class="brand-link">
        <img
            class="brand-image img-circle elevation-3"
            src="/img/logo.999a1214.png"
            alt="T40 Logo"
            style="opacity: .8"
        >
        <span class="brand-text font-weight-light">T40</span>
      </router-link>
      <div class="sidebar">
          <div class="user-panel mt-3 pb-3 d-flex">
              <div class="image">
                  <img class="img-circle elevation-2" src="/img/user.png" alt="Olakunle">
              </div>
              <div class="info d-flex">
                  <router-link to="/profile" class="mr-3">
                      <i class="fas fa-user text-success"></i>
                      Profile
                  </router-link>
                  <a href="javascript:void(0);" class="" @click="logout">
                      <i class="fas fa-power-off text-danger"></i>
                      Logout
                </a>
              </div>
          </div>
          <nav-pills></nav-pills>
      </div>
  </aside>
</template>

<script>
import NavPills from './NavPills'
export default {
    components: {
        NavPills
    },
    methods: {
        logout () {
            this.$store.dispatch('auth/logout')
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>
