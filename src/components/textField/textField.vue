<template>
  <div :class="textFieldClasses">
    <label v-if='floatingLabelText' :class="textFieldLabelClasses">{{ floatingLabelText }}</label>
    <div :class="classNames.textFieldNameClass">{{ hintText }}</div>
    <input :class="classNames.textFieldInputClass" v-model="textValue" :disabled="disabled" @blur="onBlur" @focus="onFocus" @compositionstart="compositionstart"/>
    <div>
      <hr :class="classNames.textFieldUnderlineClass"/>
      <hr v-if="underlineShow" :class="classNames.textFieldUnderlineFocusClass"/>
    </div>
    <div :class="classNames.textFieldErrorTextClass"></div>
  </div>
</template>

<script>

  import PREFIX_CLASS from 'config/prefix'
  import objectAssign from 'object-assign'

  const TEXTFIELD_CLASS = PREFIX_CLASS + 'textField'
  const TEXTFIELD_ACTIVE = TEXTFIELD_CLASS + '-active'
  const TEXTFIELD_DISABLED = TEXTFIELD_CLASS + '-disabled'
  const TEXTFIELD_LABEL = TEXTFIELD_CLASS + '-label'
  const TEXTFIELD_LABEL_FIXED = TEXTFIELD_LABEL + '-fixed'
  const TEXTFIELD_NAME = TEXTFIELD_CLASS + '-name'
  const TEXTFIELD_INPUT = TEXTFIELD_CLASS + '-input'
  const TEXTFIELD_UNDERLINE = TEXTFIELD_CLASS + '-underline'
  const TEXTFIELD_UNDERLINE_FOCUS = TEXTFIELD_UNDERLINE + '-focus'
  const TEXTFIELD_ERROR_TEXT = TEXTFIELD_CLASS + '-error-text'

  const TEXTFIELD_FULL_WIDTH = TEXTFIELD_CLASS + '-full-width'
  const TEXTFIELD_WITH_LABEL = TEXTFIELD_CLASS + '-with-label'
  const TEXTFIELD_HAS_VALUE = TEXTFIELD_CLASS + '-has-value'

  export default {
    name: 'textField',
    props: {
      className: String,
      defaultValue: [String, Number],
      disabled: {
        type: Boolean,
        default: false
      },
      errorStyle: Object,
      errorText: String,
      floatingLabelFixed: {
        type: Boolean,
        default: false
      },
      floatingLabelFocusStyle: Object,
      floatingLabelShrinkStyle: Object,
      floatingLabelStyle: Object,
      floatingLabelText: String,
      fullWidth: {
        type: Boolean,
        default: false
      },
      hintStyle: Object,
      hintText: String,
      id: String,
      inputStyle: Object,
      multiLine: {
        type: Boolean,
        default: false
      },
      name: String,
      onChange: Function,
      rows: {
        type: Number,
        default: 1
      },
      rowsMax: Number,
      style: Object,
      textareaStyle: Object,
      type: {
        type: String,
        default: 'text'
      },
      underlineDisabledStyle: Object,
      underlineFocusStyle: Object,
      underlineShow: {
        type: Boolean,
        default: true
      },
      underlineStyle: Object,
      value: String
    },
    created() {
      this.dataValue = this.value
    },
    data() {
      return {
        classNames: {
          textFieldClass: TEXTFIELD_CLASS,
          textFieldActiveClass: TEXTFIELD_ACTIVE,
          textFieldDisabledClass: TEXTFIELD_DISABLED,
          textFieldLabelClass: TEXTFIELD_LABEL,
          textFieldNameClass: TEXTFIELD_NAME,
          textFieldInputClass: TEXTFIELD_INPUT,
          textFieldUnderlineClass: TEXTFIELD_UNDERLINE,
          textFieldUnderlineFocusClass: TEXTFIELD_UNDERLINE_FOCUS,
          textFieldErrorTextClass: TEXTFIELD_ERROR_TEXT
        },
        dataValue: '',
        active: false,
        nameHide: false
      }
    },
    methods: {
      onBlur(e) {
        this.active = false
      },

      onFocus() {
        this.active = true
      },

      compositionstart(e) {
        if(this.dataValue === '') {
          this.nameHide = true
        }
      }
    },
    computed: {
      textFieldClasses: function() {
        return [
          this.className,
          this.classNames.textFieldClass,
          {
            [this.classNames.textFieldActiveClass]: this.active,
            [this.classNames.textFieldDisabledClass]: this.disabled,
            [TEXTFIELD_FULL_WIDTH]: this.fullWidth,
            [TEXTFIELD_WITH_LABEL]: this.floatingLabelText && this.floatingLabelText !== '',
            [TEXTFIELD_HAS_VALUE]: this.textValue && this.textValue !== '' || this.nameHide,
            [TEXTFIELD_LABEL_FIXED]: this.floatingLabelFixed &&  this.floatingLabelText && (!this.dataValue || this.dataValue === '') && !this.active
          }
        ]
      },
      textValue: {
        get: function() {
          return this.dataValue
        },
        set: function(newValue) {
          if(newValue === '') {
            this.nameHide = false
          }
          this.dataValue = newValue
          this.$emit('onChange', newValue)
        }
      },
      textFieldLabelClasses: function() {
        return [
          this.classNames.textFieldLabelClass,
          {
            [TEXTFIELD_LABEL_FIXED]: this.floatingLabelFixed && (!this.dataValue || this.dataValue === '') && !this.active
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../style/index.less";

  .@{prefix}textField {

    position: relative;
    font-size: 16px;
    line-height: 24px;
    width: 256px;
    height: 48px;
    display: inline-block;
    background-color: transparent;
    font-family: Roboto, sans-serif;
    transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

    &&-disabled {
      cursor: not-allowed;

      .@{prefix}textField-underline {
        border-bottom: 1px dashed rgb(224, 224, 224);
      }
    }

    &-label {
      position: absolute;
      line-height: 22px;
      top: 38px;
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      z-index: 1;
      transform: scale(0.75) translate(0px, -28px);
      transform-origin: left top 0px;
      pointer-events: none;
      color: rgba(0, 0, 0, 0.298039);
      user-select: none;
    }

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

    &-name {
      position: absolute;
      opacity: 1;
      color: rgba(0, 0, 0, 0.298039);
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      bottom: 12px;
    }

    &-underline {
      border-top: none rgb(224, 224, 224);
      border-left: none rgb(224, 224, 224);
      border-right: none rgb(224, 224, 224);
      border-bottom: 1px solid rgb(224, 224, 224);
      bottom: 8px;
      box-sizing: content-box;
      margin: 0px;
      position: absolute;
      width: 100%;
    }

    &-underline-focus {
      border-top: none rgb(0, 188, 212);
      border-left: none rgb(0, 188, 212);
      border-right: none rgb(0, 188, 212);
      border-bottom: 2px solid rgb(0, 188, 212);
      bottom: 8px;
      box-sizing: content-box;
      margin: 0px;
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    }

    &-error-text {
      position: relative;
      bottom: 2px;
      font-size: 12px;
      line-height: 12px;
      color: rgb(244, 67, 54);
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    }

    &-full-width {
      width: 100%;
    }

    &-with-label {
      height: 72px;

      > .@{prefix}textField-input {
        box-sizing: border-box;
        margin-top: 14px;
        -webkit-appearance: textfield;
      }

      > .@{prefix}textField-error-text {
        bottom: 15px;
      }
    }

    &-has-value {
      > .@{prefix}textField-name {
        opacity: 0;
      }
    }

    &-active {
      & .@{prefix}textField-label {
        color: #00bcd4;
      }

      & .@{prefix}textField-underline-focus {
        transform: scaleX(1);
      }
    }

    &-label-fixed {
      transform: scale(1) translate(0px, 0px);

      & .@{prefix}textField-name {
        opacity: 0;
      }
    }
  }
</style>
