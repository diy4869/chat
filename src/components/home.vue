<template>
  <div class="home">
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- 底部菜单 -->
    <ul class="footer">
      <router-link v-for="(item, index) in tab" :to="item.name" :key="index" tag="li">
        <span v-bind:class="['icon', item.icon]"></span>
        <span class="text">{{item.text}}</span>
        <span class="newNotice" v-show="item.noticeState">50</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
// import { Tabbar, TabItem } from 'mint-ui'
export default {
  name: 'home',
  data () {
    return {
      tab: [{
        name: 'notice',
        text: '通知',
        icon: 'icon-notice',
        noticeState: true
      },
      {
        name: 'contacts',
        text: '联系人',
        icon: 'icon-contacts',
        noticeState: true
      },
      {
        name: 'dynamic',
        text: '动态',
        icon: 'icon-dynamic',
        noticeState: true
      },
      {
        name: 'my',
        text: '我',
        icon: 'icon-my',
        noticeState: false
      }]
    }
  },
  created () {
    console.log(this.show)
  },
  watch: {
    show () {
      console.log('show改变了')
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    .main {
      height: 16.35rem;
      background: white;
    }
    .footer{
      position: absolute;
      bottom: 0;
      display: flex;
      flex: 1;
      width: 100%;
      border-top: 2px solid #26a2ff;
      li {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 5px;
        line-height: .8rem;
        position: relative;
        .icon {
          font-size: 20px;
        }
        .text{
          font-size: 12px;
        }
        .newNotice{
          width: .8rem;
          height: .55rem;
          // padding: 0rem .1rem 0rem .1rem;
          // transform: rotate(180deg);
          border-radius: 15px;
          background: #f44336;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          position: absolute;
          bottom: .9rem;
          left: 1.6rem;
        }
      }
      .router-link-active{
        color: #26a2ff;
      }
    }
  }
  @font-face {
    font-family: 'icomoon';
    src:  url('../../static/fonts/icomoon.eot?nt0fv2');
    src:  url('../../static/fonts/icomoon.eot?nt0fv2#iefix') format('embedded-opentype'),
      url('../../static/fonts/icomoon.ttf?nt0fv2') format('truetype'),
      url('../../static/fonts/icomoon.woff?nt0fv2') format('woff'),
      url('../../static/fonts/icomoon.svg?nt0fv2#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-notice:before {
    content: "\e904";
  }
  .icon-dynamic:before {
    content: "\e901";
  }
  .icon-contacts:before {
    content: "\e902";
  }
  .icon-my:before {
    content: "\e903";
  }
</style>
