<template>
  <transition name="fadeInRight" enter-active-class="fadeInRight">
    <div class="verify">
      <mt-header fixed title="好友申请">
        <router-link to="notice" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <ul>
        <li v-for="(item, index) in data" :key="index">
          <img src="../../../static/img/22.jpg" alt="" class="icon">
          <div>
            <span class="username">{{item.username}}</span>
            <span class="account">{{item.verify_message === null ? '暂无数据': item.verify_message}}</span>
          </div>
          <mt-button type="primary" class="mint-button mint-button--primarymint-button--normal">{{data[0].isAgree === 0 ? '等待同意' : ''}}</mt-button>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
import api from '../../api/api'
export default {
  data () {
    return {
      data: []
    }
  },
  created () {
    api.applicationList({
      user_id: localStorage.getItem('user_id'),
      token: localStorage.getItem('token')
    }).then(res => {
      console.log(res.data)
      this.data = res.data.data[0]
      console.log(res.data.data)
    })
  }
}
</script>
<style lang="scss" scoped>
  .verify {
    height: 100%;
    background: white;
  }
  .mint-header.is-fixed {
    position: relative;
  }
  ul {
    height: 16.71rem;
    overflow: auto;
    li {
      display: flex;
      flex: 1;
      vertical-align: middle;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0.5rem;
      border-bottom: .02rem solid #f2f2f2;
      .icon {
        width: 1.33rem;
        height: 1.33rem;
        border-radius: 50%;
      }
      div{
        display: flex;
        flex: 1;
        width: 5rem;
        flex-direction: column;
        // justify-content: flex-start;
        margin: 0 .3rem;
        line-height: 0.6rem;
        font-size: 0.35rem;
        color: #888888;
      }
      .mint-button--primary {
        font-size: 0.4rem;
        height: 0.8rem;
        margin-right: -0.07rem;
        background: transparent;
        color: #888888;
      }
    }
  }
</style>
