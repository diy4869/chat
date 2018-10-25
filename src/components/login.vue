<template>
  <div class="loginBox">
    <ul class="login">
      <li>
        <input type="text" placeholder="请输入账号" v-model="account">
      </li>
      <li>
        <input type="password" placeholder="请输入密码" v-model="password">
      </li>
      <li>
        <mt-button type="primary" class="loginBtn" @click="login">登陆</mt-button>
      </li>
      <li>
        <router-link to="register" tag="span">新用户注册</router-link>
        <span>忘记密码</span>
      </li>
    </ul>
  </div>
</template>
<script>
import register from './register'
import send from '../api/api'
import { Indicator } from 'mint-ui'
export default {
  name: 'login',
  components: {
    register
  },
  data () {
    return {
      clicked: false,
      isShow: undefined,
      account: 6,
      password: '123456',
      data: []
      // transitionName: 'fadeInBottom'
    }
  },
  methods: {
    register () {
      this.clicked = !this.clicked
    },
    login () {
      // Indicator.open({
      //   text: '加载中...',
      //   spinnerType: 'fading-circle'
      // })
      send.userLogin({
        user_id: this.account,
        password: this.password
      }).then(res => {
        console.log(res.data.status)
        Indicator.close()
        if (res === undefined) {
          return
        }
        if (res.data.status === 200) {
          this.$router.push('notice')
          this.data = res.data.data[0]
          localStorage.setItem('token', this.data.token)
          localStorage.setItem('user_id', this.data.user_id)
          localStorage.setItem('userInfo', JSON.stringify(this.data))
          console.log(this.data)
        } else {
          return alert('登陆失败')
        }
      }).catch(err => {
        throw err
      })
    },
    back () {
      this.clicked = false
    }
  }
}
</script>
<style lang="scss" scoped>

.loginBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  background: url('../../static/img/33.jpg') no-repeat;
  background-size: 100% 100%;
}

.login{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 120px;
  li {
    width: 90%;
    height: 40px;
    margin-top: 30px;
  }
  input {
    width: 100%;
    height: 40px;
    border: 0px solid transparent;
    text-indent: 1em;
  }
  li:first-child{
    margin-top: 0;
  }
  li:last-child{
    margin-top: 10px;
    display: flex;
    flex-direction: row-reverse;
  }
  li:last-child input{
    border: 0px solid transparent;
  }
  li:last-child span{
    display: flex;
    flex: 1;
    align-items: center;
    color: white;
  }
  li:last-child span:first-child{
    justify-content: flex-end;
  }
  li:last-child span:last-child{
    justify-content: flex-start;
  }
  li button{
    width: 100%;
    font-size: 20px;
  }
}

</style>
