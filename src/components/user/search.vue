<template>
  <transition name="fadeRight" enter-active-class="fadeInRight">
    <div class="searchUser">
      <div class="search">
        <input type="text" placeholder="请输入账号进行搜索" autofocus="false" v-model="account">
        <span class="cancel icon-cancel" @click="cancel"></span>
        <mt-button type="primary" @click="search">搜索</mt-button>
        <!-- @click="$store.dispatch('search', account)" -->
      </div>
      <!-- 搜索的结果 -->
      <ul v-show="isShow ? true : false">
        <li>
          <img src="../../../static/img/22.jpg" alt="" class="icon">
          <div>
            <span class="username">{{searchData.username}}</span>
            <span class="account">{{searchData.account_id}}</span>
          </div>
          <router-link to="addUser" tag="button" class="mint-button mint-button--primary mint-button--normal">添加</router-link>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
import { Toast } from 'mint-ui'
import api from '../../api/api'
// import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      searchData: [],
      isShow: false,
      account: '2'
    }
  },
  methods: {
    search () {
      let reg = /^\d+$/g
      if (this.account === '') {
        return Toast({
          message: '不能为空',
          duration: 2000
        })
      }
      if (this.account.search(reg) === -1) {
        Toast({
          message: '暂不支持模糊查询，请输入数字',
          duration: 2000
        })
      } else {
        api.searchUser({
          token: localStorage.getItem('token'),
          user_id: this.account
        }).then(res => {
          if (res.data.status === 200) {
            this.searchData = res.data.data[0]
            localStorage.setItem('searchData', JSON.stringify(this.searchData))
            this.isShow = true
          } else {
            Toast({
              message: '用户不存在',
              duration: 2000
            })
          }
        })
      }
    },
    // ...mapActions(['search']),
    // ...mapMutations(['search']),
    cancel () {
      this.account = ''
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to, from)
      // return
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  computed: {
  // ...mapState({
  //   data: state => localStorage.setItem('searchData', JSON.stringify(state.search.data)),
  //   isShow: state => state.search.isShow
  // }),
  // account: {
  //   get: function () {
  //     return this.$store.state.search.account
  //   },
  //   set: function (newValue) {
  //     console.log(newValue)
  //     this.$store.state.search.account = newValue
  //   }
  // }
  }
}
</script>
<style lang="scss" scoped>
  @font-face {
    font-family: 'icomoon';
    src:  url('../../../static/fonts/icomoon.eot?nt0fv2');
    src:  url('../../../static/fonts/icomoon.eot?nt0fv2#iefix') format('embedded-opentype'),
      url('../../../static/fonts/icomoon.ttf?nt0fv2') format('truetype'),
      url('../../../static/fonts/icomoon.woff?nt0fv2') format('woff'),
      url('../../../static/fonts/icomoon.svg?nt0fv2#icomoon') format('svg');
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
  .icon-cancel:before {
    content: "\e900";
  }
  .searchUser{
    width: 100%;
    height: 100%;
    position: relative;
    // border: 2px solid blue;height: 100%;
    background: white;
    .search {
      background: #f2f2f2;
      padding: 0.2rem;
      display: flex;
      flex: 1;
      input {
        display: flex;
        flex: 1;
        height: .8rem;
        border-radius: .13rem;
        border: 0px solid transparent;
        text-indent: 1em;
      }
      .cancel{
        display: flex;
        align-items: center;
        font-size: 0.6rem;
        color: #aab7c1;
        margin: 0 0.1rem;
      }
      .mint-button--primary{
        height: 0.8rem;
        vertical-align: middle;
        font-size: .4rem;
      }
    }
    ul {
      li {
        display: flex;
        flex: 1;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        padding: 0.2rem 0.5rem;
        .icon {
          width: 1.33rem;
          height: 1.33rem;
          border-radius: 50%;
        }
        div{
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          margin: 0 .3rem;
          line-height: 0.6rem;
          font-size: 0.35rem;
          color: #888888;
        }
        .mint-button--primary {
          font-size: 0.4rem;
          height: 0.8rem;
          margin-right: -0.07rem;
        }
      }
    }
  }
</style>
