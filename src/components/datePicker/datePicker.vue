<template>
  <div :class="datePickerClass">
    <text-field>
    </text-field>
  </div>
</template>

<script>
  import PREFIX_CLASS from 'config/prefix'
  import objectAssign from 'object-assign'
  import TextField from 'components/textField/textField'

  const DATEPICKER_CLASS = PREFIX_CLASS + 'datePicker'
  const DATEPICKER_INPUT_CLASS = DATEPICKER_CLASS + '-input'
  const DATEPICKER_TEXT_CLASS = DATEPICKER_CLASS + '-text'

  export default {
    name: 'datePicker',
    props: {
      hintText: String
    },
    data() {
      return {
        datePickerClass: DATEPICKER_CLASS,
        datePickerInputClass: DATEPICKER_INPUT_CLASS,
        datePickerTextClass: DATEPICKER_TEXT_CLASS
      }
    },
    components: {
      TextField
    }
  }
</script>

<style lang="less" scoped>
  @import "../../style/index.less";

  .@{prefix}datePicker {

    position: relative;
    font-size: 16px;
    line-height: 24px;
    width: 256px;
    height: 48px;
    display: inline-block;
    background-color: transparent;
    font-family: Roboto, sans-serif;
    transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
</style>
