<template>
  <div class="registerBox">
    <mt-header fixed title="注册">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot=""></mt-button>
    </mt-header>
    <ul class="register">
      <li>
        <input type="text" placeholder="请输入用户名" v-model="username">
      </li>
      <li>
        <input type="text" placeholder="请输入密码" v-model="password">
      </li>
      <li>
        <mt-button type="primary" circle @click="register">注册</mt-button>
      </li>
    </ul>
  </div>
</template>
<script>
import send from '../api/api'
import { MessageBox } from 'mint-ui'
export default {
  name: 'register',
  props: ['clicked'],
  data () {
    return {
      username: 'last order',
      password: '123456'
    }
  },
  created () {
    console.log(this.clicked)
  },
  methods: {
    back () {
      this.$emit('back', this.clicked)
    },
    register () {
      console.log(12)
      send.userRegister({
        username: this.username,
        password: this.password
      }).then(res => {
        // Indicator.close()
        if (res.data.status === 200) {
          MessageBox('注册成功', '您的账号是' + res.data.data[0].user_id).then(action => {
            this.$router.push('login')
          })
        } else {
          MessageBox('注册失败', '请检查用户名')
        }
      }).catch(err => {
        throw err
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.registerBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  background: url('../../static/img/22.jpg') no-repeat;
  background-size: 100% 100%;
}
.mint-header.is-fixed {
  position: absolute;
}
.register{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 220px;
  li {
    width: 90%;
    height: 40px;
    margin-top: 30px;
  }
  input {
    width: 100%;
    height: 40px;
    text-indent: 1em;
    border: 0px solid transparent;
    border-radius: 5px
  }
  li:first-child{
    margin-top: 0;
  }
  li:last-child{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
  }
  li:last-child span{
    display: flex;
    flex: 1;
    align-items: center;
  }
  li:last-child span:last-child{
    justify-content: flex-start;
  }
  li:last-child span:last-child{
    justify-content: flex-end;
  }
  li button{
    width: 100%;
    font-size: 20px;
  }
}
</style>
