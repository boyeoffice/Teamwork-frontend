<template>
    <div>
        <router-view />
    </div>
</template>

<script>
import { reactive, computed } from '@vue/composition-api'
export default {
    setup () {
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
