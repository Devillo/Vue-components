<template>
  <DatePicker :hintText="aaaa"/>
</template>

<script>
  import DatePicker from 'components/datePicker/datePicker'

  export default {
    name: 'datePickerExample',
    data() {
      return {
        aaaa: 'aaaaaaa'
      }
    },
    components: {
      DatePicker
    }
  }
</script>
