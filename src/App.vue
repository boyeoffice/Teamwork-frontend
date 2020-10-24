<template>
    <div :class="{'wrapper': $route.meta.onlyAuthUser}">
        <navbar v-if="$route.meta.onlyAuthUser" />
        <sidebar v-if="$route.meta.onlyAuthUser" />
        <div :class="{'content-wrapper': $route.meta.onlyAuthUser}">
            <router-view />
        </div>
        <footer v-if="$route.meta.onlyAuthUser" class="main-footer">
            <div class="float-right d-none d-sm-block">
            <b>Version</b> 3.0.5
            </div>
            <strong>Copyright © 2020 <a href="javascript:void(0)">TEAMWORK</a>.</strong> All rights
            reserved.
        </footer>
    </div>
</template>

<script>
import { reactive, computed } from '@vue/composition-api'
import Navbar from './components/ui/navbars/Navbar'
import Sidebar from './components/ui/sidebars/Sidebar'
export default {
    components: {
        Navbar,
        Sidebar
    },
    setup (_, { root }) {
        const state = reactive({
            count: 0,
            double: computed(() => state.count * 2)
        })
        const form = {}
        function increment () {
            state.count++
        }
        return {
            state,
            increment,
            form
        }
    }
}
</script>

<style>

</style>
