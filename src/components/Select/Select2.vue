
<template>
    <select style="width: 100%;" class="form-control select2">
        <slot></slot>
    </select>
</template>

<script>
/* eslint-disable no-undef */
export default {
    props: ['options', 'value', 'name'],
    mounted: function () {
        var vm = this
        $(this.$el)
        // init select2
            .select2({ theme: 'bootstrap4', data: this.options })
            .val(this.value)
            .trigger('change')
        // emit event on change
            .on('change', function () {
                vm.$emit('input', this.value)
            })
    },
    watch: {
        value: function (value) {
            // update value
            $(this.$el)
                .val(value)
                .trigger('change')
        },
        options: function (options) {
            // update options
            $(this.$el).empty().select2({ theme: 'bootstrap4', data: options })
        }
    },
    destroyed: function () {
        $(this.$el).off().select2('destroy')
    }
}
</script>
