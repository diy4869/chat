// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/index'
import io from 'socket.io-client'
const socket = io('ws://localhost:2333')
Vue.prototype.$io = socket
console.log(socket)

// console.log(io)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(mintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
