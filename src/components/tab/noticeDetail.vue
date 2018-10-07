<template>
  <div class="noticeDetail">
     <mt-header fixed :title="'账号是: ' + $route.query.id">
        <router-link to="notice" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <ul>
        <li class="left">
          <!-- <div> -->
            <img class="userIcon" src="../../../static/img/test.jpg" alt="">
          <!-- </div> -->
          <div>
            <span>用户名称</span>
            <span></span>
          </div>
        </li>
        <li class="right">
          <div>
            <img class="userIcon" src="../../../static/img/test.jpg" alt="">
          </div>
          <div>
            <span>用户名称</span>
            <span></span>
          </div>
        </li>
      </ul>
      <Input @submit="sendMessage"/>
  </div>
</template>
<script>
import Input from './input'
export default {
  components: {
    Input
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    sendMessage (msg) {
      this.msg = msg
    }
  }
}
</script>

<style lang="scss" scoped>
  .noticeDetail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    ul{
      display: flex;
      flex-direction: column;
      li{
        display: flex;
        align-items: center;
        padding: 8px 0;
        .userIcon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 0 .2rem;
          vertical-align: top;
        }
        div {
          display: flex;
          flex-direction: column;
          &:nth-child(2) {
            flex: 1;
            span {
              line-height: .67rem;
              padding: 0.1rem 0.2rem;
            }
          }
        }
      }
      .right {
        flex-direction: row-reverse;
        div {
          text-align: right;
        }
      }
    }
  }
</style>
