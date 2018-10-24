<template>
  <transition name="fadeInRight"  enter-active-class="fadeInRight">
    <div class="addUser">
      <mt-header fixed title="添加好友">
        <router-link to="notice" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="" slot="right" @click="add">发送</mt-button>
      </mt-header>
      <ul>
        <li>
          <img src="../../../static/img/22.jpg" alt="" class="icon">
          <div>
            <span class="username">{{userInfo.username}}</span>
            <span class="account">{{userInfo.user_id}}</span>
          </div>
        </li>
        <li>
          <span>添加验证信息</span>
        </li>
        <li>
          <textarea name="" id="" v-model="val"></textarea>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
import { Toast, Indicator } from 'mint-ui'
import api from '../../api/api'
// import io from 'socket.io-client'
export default {
  data () {
    return {
      val: 'emmmmmm',
      userInfo: JSON.parse(localStorage.getItem('searchData'))
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
  methods: {
    add () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      let data = JSON.parse(localStorage.getItem('userInfo'))
      let params = {
        user_id: data.user_id,
        friends_id: this.userInfo.user_id,
        verify_message: this.val,
        token: data.token
      }
      api.addUser(params).then(res => {
        Indicator.close()
        if (res.data.status === 200) {
          Toast({
            message: '请等待审核',
            iconClass: 'icon icon-success',
            duration: 2000
          })
          this.socket(params)
          return 'hello world'
        } else {
          Toast({
            message: '添加失败',
            duration: 2000
          })
        }
      })
    },
    socket (params) {
      this.$io.emit('addUser', params)
    }
  }
}
</script>
<style lang="scss" scoped>
  .addUser{
    width: 100%;
    height: 100%;
    position: relative;
    background: white;
  }
  .mint-header.is-fixed{
    position: relative;
  }
  ul {
    li {
      display: flex;
      flex: 1;
      vertical-align: middle;
      align-items: center;
      padding: 0.2rem 0.5rem;
      margin: .27rem 0;
      .icon {
        width: 1.33rem;
        height: 1.33rem;
        border-radius: 50%;
      }
      div{
        display: flex;
        flex: 1;
        height: 1rem;
        flex-direction: column;
        // justify-content: center;
        margin: 0 .5rem;
        line-height: 0.6rem;
        font-size: 0.4rem;
        color: #888888;
      }
      .mint-button--primary {
        font-size: 0.4rem;
        height: 0.8rem;
        margin-right: -0.07rem;
      }
      textarea {
        width: 100%;
        height: 3rem;
        resize: none;
        font-size: .43rem;
        border: 1.5px solid #26A2ff;
        text-indent: 1em;
      }
    }
  }
</style>
