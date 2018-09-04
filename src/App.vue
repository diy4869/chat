<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
  }
}
</script>

<style lang="scss">
  html, body, .container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    // box-sizing: border-box
    // background: url('../static/img/33.jpg');
    // background-size: 100% 100%;
  }
  // .mint-header.is-fixed{
  //   position: relative;
  // }
</style>
