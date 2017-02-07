<template>
  <ul class="side-nav">
    <router-link :to="{ name: 'overview' }" tag="li" class="side-nav-item">概览</router-link>
    <router-link :to="{ name: 'icon' }" tag="li" class="side-nav-item">Icon</router-link>
    <router-link :to="{ name: 'raisedButton' }" tag="li" class="side-nav-item">Raised Button</router-link>
    <router-link :to="{ name: 'flatButton' }" tag="li" class="side-nav-item">Flat Button</router-link>
    <router-link :to="{ name: 'textField' }" tag="li" class="side-nav-item">Text Field</router-link>
    <router-link :to="{ name: 'datePicker' }" tag="li" class="side-nav-item">Date Picker</router-link>
    <router-link :to="{ name: 'dialog' }" tag="li" class="side-nav-item">Dialog</router-link>
  </ul>
</template>

<style lang="less">
  .sidebar {
    font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif
  }
  .side-nav {
    padding: 60 60px 0 60px;
    margin: 0;
    list-style-type: none;

    &-item {
      padding: 0px 16px 0px 28px;
      height: 42px;
      line-height: 42px;
      transition: all .3s ease;
      max-width: 250px;

      &-active {
        color: #108ee9;
        background-color:#ecf6fd;
        border-right: 3px solid #108ee9;
      }
    }
  }
</style>
