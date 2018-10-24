<template>
  <div class="container">
    <!-- <transition :name="transitionName" :enter-active-class="transitionName"> -->
      <router-view class="child-view"></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'fadeInRight'
    }
  },
  watch: {
    '$route' (to, from) {
      // console.log(to, from)
      const toDepth = to.path.length
      const fromDepth = from.path.length
      // this.transitionName = toDepth < fromDepth ? 'fadeInRight' : 'fadeInLeft'
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      // console.log(toDepth, fromDepth)
      // console.log(this.transitionName)
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  html, body, .container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .mint-header.is-fixed {
    position: relative;
  }
  .child-view {
    transition: 0.4s linear;
  }
  // .slide-left-enter, .slide-right-leave-active {
  //   -webkit-transform: translate(100%, 0);
  //   transform: translate(100%, 0);
  // }
  // .slide-left-leave-active, .slide-right-enter {
  //   -webkit-transform: translate(-100%, 0);
  //   transform: translate(-100%, 0);
  // }
  .slide-left-enter, .slide-right-leave-active {
    transform: translateX(100%);
  }
  .slide-left-leave-active, .slide-right-enter {
    transform: translateX(-100%);
  }
</style>
