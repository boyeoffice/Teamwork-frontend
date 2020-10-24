<template>
  <modal @close="closeModal">
      <form>
          <div class="row">
              <div class="col-6">
                  <div class="form-group">
                      <label for="first_name">First Name</label>
                      <input type="text" class="form-control" placeholder="Ola" v-model="form.first_name">
                  </div>
              </div>
              <div class="col-6">
                  <div class="form-group">
                      <label for="last_name">Last Name</label>
                      <input type="text" class="form-control" placeholder="Boye" v-model="form.last_name">
                  </div>
              </div>
          </div>
      </form>
  </modal>
</template>

<script>
/* eslint-disable no-undef */
import { reactive, computed } from '@vue/composition-api'
import Modal from '../Modal'
export default {
    components: {
        Modal
    },
    setup (_, cxt) {
        function closeModal () {
            cxt.emit('close-modal')
        }
        const form = reactive({
            first_name: '',
            last_name: ''
        })
        const formValid = computed(() => {
            return Object.keys(form).every(field => form[field])
        })
        return {
            closeModal,
            form,
            formValid
        }
    }
}
</script>

<style>

</style>
