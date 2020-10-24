<template>
  <div class="card card-default">
      <div class="card-header">
          <div class="card-title">
              <h5>
                  {{ title }}
                  <span v-if="subTittle">({{ subTittle }})</span>
              </h5>
          </div>
          <div class="card-tools">
              <a v-if="create" href="javascript:void(0);" class="btn btn-success btn-sm" @click="$emit('create')">Create</a>
              <a v-if="importData" href="javascript:void(0);" class="btn btn-warning btn-sm" @click="$emit('import')">Import Data</a>
          </div>
      </div>
      <div class="card-body">
          <table class="table table-hover text-nowrap">
              <thead>
                  <tr>
                      <th v-for="(th, index) in theads" :key="index">
                          {{ th }}
                      </th>
                  </tr>
              </thead>
              <slot></slot>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        theads: Array,
        title: String,
        subTittle: String,
        create: {
            type: Boolean,
            default: function () {
                return false
            }
        },
        importData: {
            type: Boolean,
            default: function () {
                return false
            }
        }
    }
}
</script>

<style>

</style>
