<template>
  <div class="noticeDetail">
     <mt-header fixed :title="'账号是: ' + $route.query.id">
        <router-link to="notice" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <ul>
        <li :class="item.user_id === userInfo.user_id ? 'right' : 'left'" v-for="(item, index) in data" :key="index">
          <!-- <div> -->
            <img class="userIcon" src="../../../static/img/test.jpg" alt="">
          <!-- </div> -->
          <div>
            <span>{{item.username}}</span>
            <span>{{item.send_message}}</span>
          </div>
        </li>
        <!-- <li class="right">
          <div>
            <img class="userIcon" src="../../../static/img/test.jpg" alt="">
          </div>
          <div>
            <span>用户名称</span>
            <span></span>
          </div>
        </li> -->
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
      msg: '',
      data: [],
      newMessageCount: 0,
      userInfo: JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  created () {
    this.receiveMessage()
  },
  methods: {
    receiveMessage () {
      console.log(this.$io)
      this.$io.on('send message', data => {
        this.newMessageCount++
        console.log(this.newMessageCount)
        this.$emit('receiveMessage', this.newMessageCount)
        this.data = JSON.parse(data)
      })
    },
    sendMessage (msg) {
      this.msg = msg
      this.data.push({
        username: this.userInfo.username,
        user_id: this.userInfo.user_id,
        user_icon: this.userInfo.user_icon,
        send_message: msg,
        sendTime: new Date().valueOf()
      })
      this.msg = ''
      this.$io.emit('send message', JSON.stringify(this.data))
    }
  }
}
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: test;
    src: url('../../../static/fonts/FZZZHUNHK.ttf') format(truetype);
  }
  .noticeDetail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    ul{
      display: flex;
      width: 95%;
      margin: 0 auto;
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
            span {
              line-height: .5rem;
              padding: 4px;
              &:nth-child(2) {
                background: #f1f1f1;
                border-radius: 5px;
                letter-spacing: 2px;
                font-size: 14px;
                font-family: test;
                color: black;
              }
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
