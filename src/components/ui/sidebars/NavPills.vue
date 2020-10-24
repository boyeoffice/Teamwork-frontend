<template>
  <nav class="mt-2">
    <ul
        class="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
    >
        <li class="nav-item" v-for="(item, index) in items" :key="index">
            <router-link :to="item.url" class="nav-link">
                <i :class="[{'nav-icon fas': true}, item.icon]"></i>
                <p>{{ item.name }}</p>
            </router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
    data () {
        return {
            items: [
                { url: '/', name: 'Dashboard', icon: 'fa-tachometer-alt' },
                { url: '/employee', name: 'Employees', icon: 'fa-users' },
                { url: '/brand', name: 'Brands', icon: 'fa-building' },
                { url: '/country', name: 'Countries', icon: 'fa-flag' },
                { url: '/passenger/type', name: 'Passenger Type', icon: 'fa-users' },
                { url: '/customer', name: 'Customer', icon: 'fa-users' }
            ]
        }
    }
}
</script>

<style>

</style>
