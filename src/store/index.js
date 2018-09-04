import Vue from 'vue'
import Vuex from 'vuex'
// import add from './modules/add'
// import search from './modules/search'
import preview from './modules/preview'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // search
    preview
  }
})
