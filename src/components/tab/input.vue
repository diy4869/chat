<template>
  <div class="input">
    <input type="text" placeholder="请输入内容" v-model="text">
    <mt-button type="primary" @click="send">发送</mt-button>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      text: 'hello'
    }
  },
  methods: {
    send () {
      if (this.text === '') {
        Toast({
          message: '不能为空',
          position: 'middle',
          duration: 2000
        })
        return
      }
      this.$emit('submit', this.text)
      this.text = ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .input{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #eee;
    position: absolute;
    bottom: 0;
    input{
      width: 100%;
      height: 1rem;
      border: 0px solid transparent;
      border-radius: 0.2rem;
      margin-left: 0.2rem;
      text-indent: .5em;
      font-size: 0.4rem;
    }
    button {
      width: 1.5rem;
      height: 1rem;
      margin: 0.2rem;
      font-size: 0.4rem;
      padding: 0;
    }
  }
</style>
