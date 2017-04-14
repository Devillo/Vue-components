<template lang="pug">
div(class="dataPickers")
  date-picker(
    :hintText="dataPickers[0].hintText",
  )
  date-picker(
    :hintText="dataPickers[1].hintText",
  )
  date-picker(
    :hintText="dataPickers[2].hintText",
    disabled
  )
</template>

<script>
  import DatePicker from 'components/datePicker/datePicker'

  export default {
    name: 'datePickerExample',
    data() {
      return {
        dataPickers: [
          {
            hintText: 'Portrait Dialog'
          },
          {
            hintText: 'Landscape Dialog'
          },
          {
            hintText: 'Disabled Dialog'
          }
        ]
      }
    },
    components: {
      DatePicker
    }
  }
</script>

<style lang="less">
.dataPickers > div {
  float: left;
  clear: both;
}
</style>
