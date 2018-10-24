// import {SEARCH} from '../mutation-types'

import api from '../../api/api'
import {Toast} from 'mint-ui'
export default {
  // namespaced: true,
  state: {
    data: [],
    account: '2',
    isShow: false
  },
  actions: {
    search ({commit, state}, data) {
      commit('search', data)
      let reg = /^\d+$/g
      if (data === '') {
        return Toast({
          message: '不能为空',
          duration: 2000
        })
      }
      if (data.search(reg) === -1) {
        Toast({
          message: '暂不支持模糊查询，请输入数字',
          duration: 2000
        })
      } else {
        api.searchUser({
          token: localStorage.getItem('token'),
          account_id: data
        }).then(res => {
          state.data = res.data.data[0]
          if (res.data.status === 200) {
            state.isShow = true
          } else {
            Toast({
              message: '用户不存在',
              duration: 2000
            })
          }
        })
      }
    }
  },
  mutations: {
    search (state, data) {
      console.log(state)
    }
  }
}
