<template>
  <span :class="classes" :style="iconStyle" v-if="font">
    <i>{{ unicode }}</i>
  </span>
  <span :class="classes"  v-else>
    <img :src="svgUrl" />
  </span>
</template>

<script>
  import PREFIX_CLASS from 'config/prefix'

  /**
   * icon样式
   *
   * ICON_CLASS: icon基本样式
   * ICON_FONT:font icon样式
   * ICON_SVG: svg icon 样式
   **/

   const ICON_CLASS = PREFIX_CLASS + 'icon'
   const ICON_FONT = ICON_CLASS + '-font'
   const ICON_SVG = ICON_CLASS + '-svg'

   export default {
     name: 'icon',
     props: {
       font: {
         type: Boolean,
         default: false
       },
       svg: {
         type: Boolean,
         default: false
       },
       unicode: String,
       svgUrl: String,
       iconStyle: Object
     },
     data() {
       return {
         classNames: {
           iconClass: ICON_CLASS,
           iconFont: ICON_FONT,
           iconSvg: ICON_SVG
         }
       }
     },
     computed: {
       classes() {
         return [
           this.classNames.iconClass,
           {
             [this.classNames.iconFont]: this.font, [this.classNames.iconSvg]: this.svg
           }
         ]
       }
     }
   }
</script>

<style lang="less">
  @import "../../style/index.less";

  .@{prefix}icon {
    position: relative;
    font-size: 24px;
    display: inline-block;
    transition: all .45s cubic-bezier(.23, 1, .32, 1) ;
    font-family: iconfont;

    & > i {
      font-family: iconfont;
      color: inherit;
      vertical-align: middle;
      font-style: normal;
      font-size: inherit;

      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
    }
  }
</style>
