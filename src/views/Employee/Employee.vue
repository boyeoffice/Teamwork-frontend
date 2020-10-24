<template>
  <wrapper
    title="Employees"
  >
    <list-data
        :create="true"
        title="Employees"
        @create="showModal = true"
    ></list-data>
    <create-employee v-if="showModal" @close-modal="showModal = false" />
  </wrapper>
</template>

<script>
import Wrapper from '../../components/ui/Content/Wrapper'
import ListData from '../../components/ui/Table/ListData'
import CreateEmployee from '../../components/Modal/Employee/CreateEmployee'
export default {
    components: {
        Wrapper,
        ListData,
        CreateEmployee
    },
    setup () {
        const showModal = false
        return {
            showModal
        }
    }
}
</script>

<style>

</style>
