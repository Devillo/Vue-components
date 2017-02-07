<template>
  <div
    :class="btnClasses"
    :style="btnStyles"
    @click="onClick"
    @mouseover="onmouseover"
    @mouseout="onmouseout"
    @mousedown="onmousedown"
    @mouseup="onmouseup"
    v-if="!href">
    <div :class="classNames.btnNamePclass" :style="labelPStyles">
      <slot name="before"></slot>
      <span :class="classNames.btnNameClass" :style="labelStyle">{{ label }}</span>
      <slot name="after"></slot>
    </div>
    <span :class="classNames.btnRipplesClass" :style="overlayStyles">
      <span :class="classNames.btnRippleClass" :style="rippleStyles(ripple)" v-if="ripple.show" v-for="ripple in ripples"></span>
    </span>
  </div>
  <a
    :class="btnClasses"
    :style="btnStyles"
    :href="href"
    @mouseover="onmouseover"
    @mouseout="onmouseout"
    @mousedown="onmousedown"
    @mouseup="onmouseup"
    v-else>
    <div :class="classNames.btnNamePclass" :style="labelPStyles">
      <slot name="before"></slot>
      <span :class="classNames.btnNameClass" :style="labelStyle">{{ label }}</span>
      <slot name="after"></slot>
    </div>
    <span :class="classNames.btnRipplesClass" :style="overlayStyles">
      <span :class="classNames.btnRippleClass" :style="rippleStyles(ripple)" v-if="ripple.show" v-for="ripple in ripples"></span>
    </span>
  </a>
</template>

<script>

  import PREFIX_CLASS from 'config/prefix'
  import objectAssign from 'object-assign'

  /**
   * 按钮样式
   * BUTTON_CLASS: 按钮基本样式
   * BUTTON_NAME: 按钮名称样式
   * BUTTON_POINTS: 水波效果容器样式
   * BUTTON_POINT: 水波效果样式
   * BUTTON_PRESS: 按钮按压样式
   **/
  const BUTTON_CLASS = PREFIX_CLASS + 'flat-btn'
  const BUTTON_NAME = BUTTON_CLASS + '-name'
  const BUTTON_NAME_P = BUTTON_NAME + '-p'
  const BUTTON_RIPPLES = BUTTON_CLASS + '-ripples'
  const BUTTON_RIPPLE = BUTTON_CLASS + '-ripple'
  const BUTTON_PRESS = BUTTON_CLASS + '-press'
  const BUTTON_PRIMARY = BUTTON_CLASS + '-primary'
  const BUTTON_SECONDARY = BUTTON_CLASS + '-secondary'
  const BUTTON_DISABLED = BUTTON_CLASS + '-disabled'
  const BUTTON_FULLWIDTH = BUTTON_CLASS + '-fullWidth'

  export default {
    name: 'flatButton',
    props: {
      backgroundColor: String,
      buttonStyle: Object,
      className: String,
      disabled: {
        type: Boolean,
        default: false
      },
      disabledBackgroundColor: String,
      disabledLabelColor: String,
      fullWidth: {
        type: Boolean,
        default: false
      },
      href: String,
      label: String,
      labelColor: String,
      labelStyle: Object,
      overlayStyle: Object,
      rippleStyle: Object,
      primary: {
        type: Boolean,
        default: false
      },
      secondary: {
        type: Boolean,
        default: false
      }

    },
    data() {
      return {
        classNames: {
          btnClass: BUTTON_CLASS,
          btnNamePclass: BUTTON_NAME_P,
          btnNameClass: BUTTON_NAME,
          btnRipplesClass: BUTTON_RIPPLES,
          btnRippleClass: BUTTON_RIPPLE,
          btnPress: BUTTON_PRESS,
          btnPrimary: BUTTON_PRIMARY,
          btnSecondary: BUTTON_SECONDARY,
          btnDisabled: BUTTON_DISABLED,
          btnFullWidth: BUTTON_FULLWIDTH
        },
        press: false,
        active: false,
        ripples: [],
      }
    },
    methods: {
      onClick(e) {
        if(this.disabled) return
        this.$emit('onClick')
      },

      onmouseover(e) {
        if(this.disabled) return
        this.press = true
      },

      onmouseout() {
        if(this.disabled) return
        this.press = false
      },

      onmousedown(e) {
        if(e.which != 1 || this.disabled) return
        this.active = true
        const { pageX, pageY, clientY } = e
        const { offsetLeft, offsetTop } = this.$el
        const index = this.ripples.length
        const elWidth = this.$el.offsetWidth
        const elHeight = this.$el.offsetHeight
        const edgeFirst = Math.max(pageX - offsetLeft, offsetLeft + elWidth - pageX)
        const edgeSecond = Math.max(pageY - offsetTop, offsetTop + elHeight - pageY)
        const rippleRadius = Math.sqrt(Math.pow(edgeFirst, 2) + Math.pow(edgeSecond, 2))
        this.ripples.push({ width: rippleRadius * 2 + 'px', top: pageY - offsetTop - rippleRadius + 'px', left: pageX - offsetLeft - rippleRadius + 'px', show: true })

        setTimeout(() => {
          this.ripples[index].show = false;
        }, 2000)
      },

      onmouseup() {
        if(this.disabled) return
        this.active = false
      },

      rippleStyles: function(ripple) {
        return objectAssign(this.rippleStyle || {}, {
          top: ripple.top,
          left: ripple.left,
          width: ripple.width,
          height: ripple.width
        })
      }
    },
    computed: {
      btnClasses: function() {
        return [this.className,
                this.classNames.btnClass,
                {
                  [this.classNames.btnFullWidth]: this.fullWidth,
                  [this.classNames.btnPress]: this.press,
                  [this.classNames.btnPrimary]: this.primary,
                  [this.classNames.btnSecondary]: this.secondary,
                  [this.classNames.btnDisabled]: this.disabled,
                }]
      },
      btnStyles: function() {
        return objectAssign(this.buttonStyle || {}, {
          'background-color': this.disabled ? this.disabledBackgroundColor : this.backgroundColor
        })
      },
      labelPStyles: function() {
        return {
          'color': this.disabled ? this.disabledLabelColor || '' : this.labelColor || ''
        }
      },
      overlayStyles: function() {
        return this.press ? this.overlayStyle : {}
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../style/index.less";

  .@{prefix}flat-btn {
    position: relative;
    box-sizing: border-box;
    min-width: 88px;
    height: 36px;
    line-height: 36px;
    border-radius: 2px;
    display: inline-block;
    transition: all .45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    font-family: Roboto, sans-serif;
    cursor: pointer;
    overflow: hidden;
    text-decoration: none;

    &-disabled {
      & .@{prefix}flat-btn-name {
        color: rgba(0, 0, 0, 0.298039);
      }
    }

    &-ripples {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      top: 0px;
      left: 0px;
    }

    &-ripple {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, .087);
      animation: waveMove 2s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &-name-p {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
    }

    &-name {
      position: relative;
      font-family: @btn-font-family;
      font-size: 14px;
      letter-spacing: 0px;
      text-transform: uppercase;
      font-weight: 500;
      margin: 0;
      padding-left: 16px;
      padding-right: 16px;
      user-select: none;
    }

    &-press .@{prefix}flat-btn-ripples {
      background-color: rgba(0, 0, 0, 0.078);
    }

    &-primary {
      & .@{prefix}flat-btn-name-p {
        color: rgb(0, 188, 212);
      }
    }

    &-secondary {
      & .@{prefix}flat-btn-name-p {
        color: rgb(255, 64, 129);
      }

    }
  }

  @keyframes waveMove
  {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
</style>
