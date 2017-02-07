<template>
  <div>
    <icon :font="icons[0].font" :unicode="icons[0].unicode"></icon>
    <icon :svg="icons[1].svg" :svgUrl="icons[1].svgUrl"></icon>
  </div>
</template>

<script>
  import Icon from 'components/icon/icon.vue'

  export default {
    name: 'iconExample',
    data() {
      return {
        icons: [
          {
            font: true,
            unicode:'\ue77a'
          },
          {
            svg:true,
            svgUrl: '../src/assets/svg/操作_更多.svg'
          }
        ]
      }
    },
    components: {
      Icon
    }
  }
</script>

<style lang="less">
@font-face
{
  font-family: 'iconfont';
  src: url('../../assets/fonts/iconfont.eot');
  src: url('../../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../assets/fonts/iconfont.woff') format('woff'),
  url('../../assets/fonts/iconfont.ttf') format('truetype'),
  url('../../assets/fonts/iconfont.svg#iconfont') format('svg');
}
</style>
