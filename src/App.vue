<template>
  <div id="app">
    <div class="app-header">
      <icon :font="true" :unicode='"\ue77a"'></icon>
      <span class="fuck-title">FUCK VUE</span>
    </div>
    <div class="app-content">
      <div class="sidebar" v-show="show">
        <side-nav></side-nav>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import SideNav from './app/router/router'
  import Icon from 'components/icon/icon'
  export default {
    name: 'app',
    data(){
      return {
        show: true
      }
    },
    methods: {
      close() {
        this.show = false
      },
      open() {
        this.show = true
      }
    },
    components: {
      SideNav,
      Icon
    }
  }
</script>

<style lang="less">
  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  #app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .app-header {
      text-align: center;
      height: 50px;
      line-height: 50px;

      span {
        display: inline-block;
      }

      .fuck-icon {
        float: left;
        margin-left: 20px;
      }

      .fuck-title {
        position: absolute;
        left: 0px;
        right: 0px
      }
    }

    .app-content {
      display: flex;

      .sidebar {
        flex: 3;
      }

      .content {
        flex: 7;
      }
    }

  }

  @media screen and (max-device-width: 400px) {

    .sidebar {
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.541176);
      z-index: 100;
      padding: 0;
    }

    .side-nav {
      height: 100%;
      background-color: white;
      padding: 60px 0 0 0!important;
      margin-right: 100px!important;
    }

    .side-nav-item {
      margin-right: 20px;
    }
  }
</style>
