<template lang="pug">
div(:class="dialogClasses")
  div(
    :class="classNames.dialogMask"
    @click="maskOnClick"
  )
  transition(name="fade")
    div(
      v-show="open",
      :class="dialogContentClasses",
      :style="dialogContentStyle"
    )
      div(
        v-if='title',
        :class="dialogHeaderClasses",
        :style="dialogHeaderStyle"
      ) {{ title }}
      div(
        :class="dialogBodyClasses",
        :style="dialogBodyStyle"
      ) {{ text }}
      div
        flat-button(
          :label="cancelBtnLabel",
          @onClick="cancelOnClick"
        )
        flat-button(
          :label="confirmBtnLabel",
          @onClick="confirmOnClick"
        )
</template>

<script>
  import PREFIX_CLASS from 'config/prefix'
  import FlatButton from 'components/flatButton/flatButton'

  /**
   * 样式
   *
   * dialog 基本样式
   * 遮罩层样式
   * 主体样式
   * 主体头部样式
   * 主体内容样式
   * 主体底部样式

   * dialog 显示样式
   **/
  const DIALOG_CLASS = PREFIX_CLASS + 'dialog'
  const DIALOG_MASK = DIALOG_CLASS + '-mask'
  const DIALOG_CONTENT = DIALOG_CLASS + '-content'
  const DIALOG_HEADER = DIALOG_CONTENT + '-header'
  const DIALOG_BODY = DIALOG_CONTENT + '-body'
  const DIALOG_FOOTER = DIALOG_CONTENT + '-footer'

  const DIALOG_OPEN = DIALOG_CLASS + '-open'

  export default {
    name: 'dialog',
    props: {
      open: {
        type: Boolean,
        default: false
      },
      dialogContentClass: String,
      dialogContentStyle: Object,
      dialogHeaderClass: String,
      dialogHeaderStyle: Object,
      title: String,
      dialogBodyClass: String,
      dialogBodyStyle: Object,
      text: String,
      cancelBtnShow: {
        type: Boolean,
        default: true
      },
      cancelBtnLabel: String,
      confirmBtnShow: {
        type: Boolean,
        default: true
      },
      confirmBtnLabel: String
    },
    data() {
      return {
        classNames: {
          dialogClass: DIALOG_CLASS,
          dialogMask: DIALOG_MASK,
          dialogContent: DIALOG_CONTENT,
          dialogHeader: DIALOG_HEADER,
          dialogBody: DIALOG_BODY,
          dialogFooter: DIALOG_FOOTER
        },
        dataOpen: false
      }
    },
    methods: {
      maskOnClick: function() {
        this.$emit('maskOnClick')
      },
      cancelOnClick: function() {
        this.$emit('cancelOnClick')
      },
      confirmOnClick: function() {
        this.$emit('confirmOnClick')
      }
    },
    computed: {
      dialogClasses: function() {
        return [
          this.classNames.dialogClass,
          {
            [DIALOG_OPEN]: this.open
          }
        ]
      },
      dialogContentClasses: function() {
        return [ this.classNames.dialogContent, this.dialogContentClass  ]
      },
      dialogHeaderClasses: function() {
        return [ this.classNames.dialogHeader, this.dialogHeaderClass ]
      },
      dialogBodyClasses: function() {
        return [ this.classNames.dialogBody, this.dialogBodyClass ]
      }
    },
    components: {
      FlatButton
    }
  }
</script>

<style lang="less" scoped>
  @import '../../style/index.less';

  .@{prefix}dialog {

   opacity: 0;
   display: none;
   transition: opacity .45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;

   &-open {
     opacity: 1;
     display: block;
   }

   &-mask {
     position: fixed;
     z-index: 1000;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     background-color: rgba(0, 0, 0, 0.6);
   }

   &-content {
     position: fixed;
     z-index: 5000;
     width: 80%;
     max-width: 300px;
     top: 50%;
     left: 50%;
     transition: all .45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
     transform: translate(-50%, -50%);
     background-color: white;
     text-align: center;
     border-radius: 3px;
     overflow: hidden;

     &-header {
       padding: 20px 25px 10px 25px;
       font-size: 18px;
     }

     &-body {
       padding: 0 25px 15px 25px;
       min-height: 40px;
       font-size: 15px;
       line-height: 1.3;
       word-wrap: break-word;
       word-break: break-all;
       color: #999999;
     }

     &-footer {
       position: relative;
       line-height: 48px;
       font-size: 18px;
       display: flex;
     }
   }

    .fade-enter, .fade-leave-active {
      transform: translate(-50%, -80%);
    }
  }
</style>
