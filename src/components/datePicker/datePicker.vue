<template>
  <div :class="datePickerClass">
    <div :class="datePickerTextClass">{{ hintText }}</div>
    <input :class="datePickerInputClass"/>
  </div>
</template>

<script>
  import PREFIX_CLASS from 'config/prefix'
  import objectAssign from 'object-assign'

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
    cursor: not-allowed;

    &-input {
      position: relative;
      padding: 0px;
      width: 100%;
      border: none;
      outline: none;
      background-color: rgba(0, 0, 0, 0);
      color: rgba(0, 0, 0, 0.3);
      cursor: inherit;
      font-style: inherit;
      font-variant: inherit;
      font-weight: inherit;
      font-stretch: inherit;
      font-size: inherit;
      line-height: inherit;
      font-family: inherit;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      height: 100%;
      -webkit-appearance: textfield;
    }

    &-text {
      position: absolute;
      opacity: 1;
      color: rgba(0, 0, 0, 0.298039);
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      bottom: 12px;
    }
  }
</style>
