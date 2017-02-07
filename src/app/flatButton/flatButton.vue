<template>
  <div class="btn-content">
    <flat-button :label="buttons[0].label" @onClick="onClick"></flat-button>
    <flat-button :label="'disabled'" @onClick="onClick" :disabled="true"></flat-button>
    <flat-button :label="buttons[1].label" @onClick="onClick" :primary="buttons[1].primary"></flat-button>
    <flat-button :label="buttons[2].label" @onClick="onClick" :secondary="buttons[2].secondary"></flat-button>
    <flat-button
      :href='"http://www.baidu.com"'
      target="_blank"
      :label="buttons[3].label"
      :backgroundColor="buttons[3].backgroundColor"
      :buttonStyle="buttons[3].buttonStyle"
      :labelColor="buttons[3].labelColor"
      :labelStyle="buttons[3].labelStyle"
      :overlayStyle="buttons[3].overlayStyle"
      :rippleStyle="buttons[3].rippleStyle"
      :fullWidth="buttons[3].fullWidth">
      <icon :font="buttons[3].iconConfig.font" :unicode="buttons[3].iconConfig.unicode" :style="buttons[3].iconConfig.iconStyle" slot="before"></icon>
    </flat-button>
  </div>
</template>


<script>
  import FlatButton from 'components/flatButton/flatButton'
  import Icon from 'components/icon/icon'

  export default {
    name: 'buttonExample',
    data() {
      return {
        buttons: [
          {
            label: 'default'
          },
          {
            label: 'primary',
            primary: true
          },
          {
            label: 'secondary',
            secondary: true
          },
          {
            label: 'custom',
            labelColor: 'white',
            labelStyle: {
              'padding-left': '8px'
            },
            backgroundColor: '#21d0a3',
            overlayStyle: {
              'background-color': 'rgba(255, 255, 255, .4)'
            },
            rippleStyle: {
              'background-color': 'rgba(255, 255, 255, .4)'
            },
            iconConfig: {
              font: true,
              unicode: '\ue622',
              iconStyle: {
                'margin-left': '12px',
                'margin-right': '0px'
              }
            },
            iconPosition: 'before',
            fullWidth: true
          }
        ],
        classes: 'fuck-flat-btn-color',
        styles: {
          'background-color': 'rgb(0, 188, 212)'
        },
      }
    },
    methods: {
      onClick: function() {
        console.log('button click')
      }
    },
    components: {
      FlatButton,
      Icon
    }
  }
</script>

<style lang="less">
  .fuck-flat-btn-color {
    background-color: rgb(0, 188, 212);
  }
  .fuck-flat-btn {
    margin: 12px;
  }

  .btn-content {
    display: flex;
    flex-wrap: wrap;
  }
</style>
