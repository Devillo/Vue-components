<template lang="pug">
div(
  :class="datePickerClasses"
)
  text-field(
    disabled,
    :hintText="hintText"
    @onClick="onClick"
  )
  div(v-show="open")
    div(
      :class="classNames.datePickerMask",
      @click="maskOnClick"
    )
</template>

<script>
  import PREFIX_CLASS from 'config/prefix'
  import objectAssign from 'object-assign'
  import TextField from 'components/textField/textField'

  const DATEPICKER_CLASS = PREFIX_CLASS + 'datePicker'
  const DATEPICKER_DISABLED = DATEPICKER_CLASS + '-disabled'
  const DATEPICKER_MASK = DATEPICKER_CLASS + '-mask'

  export default {
    name: 'datePicker',
    props: {
      hintText: String,
      disabled: {
        type: Boolean,
        default: false
      },
      DateTimeFormat: Function,
      autoOk: {
        type: Boolean,
        default: false
      },
      className: String,
      container: {
        type: String,
        default: 'dialog'
      },
      dialogContainerStyle: Object,
      disableYearSelection: {
        type: Boolean,
        default: false
      },
      firstDayOfWeek: {
        type: Number,
        default: 1
      },
      formatDate: Function,
      locale: {
        type: String,
        default: 'zh-CN'
      },
      maxDate: Object,
      minDate: Object,
      mode: {
        type: String,
        default: 'portrait'
      },
      onChange: Function,
      onDismiss: Function,
      onFocus: Function,
      onShow: Function,
      onTouchTap: Function,
      shouldDisableDate: Function,
      style: Object,
      textFieldStyle: Object,
      value: Object
    },
    data() {
      return {
        classNames: {
          datePickerClass: DATEPICKER_CLASS,
          datePickerMask: DATEPICKER_MASK
        },
        open: false
      }
    },
    methods: {
      onClick: function() {
        this.open = true
      },
      maskOnClick: function() {
        this.open = false
      }
    },
    computed: {
      datePickerClasses: function() {
        return [
          this.classNames.datePickerClass,
          {
            [DATEPICKER_DISABLED]: this.disabled
          }
        ]
      }
    },
    components: {
      TextField
    }
  }
</script>

<style lang="less">
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

    & .@{prefix}textField {
      cursor: inherit!important;

      &-underline {
        border-bottom-style: solid!important;
      }
    }

    &-disabled {
      cursor: not-allowed;

      & .@{prefix}textField-underline {
        border-bottom-style: dashed!important;
      }
    }

    &-mask {
      position: fixed;
      z-index: 1000;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, .6)
    }

  }
</style>
