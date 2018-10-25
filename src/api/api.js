<<<<<<< HEAD
import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  console.log('======' + error)
  // 对请求错误做些什么
  // return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  console.log(response.status)
  // 对响应数据做点什么
  return response
}, error => {
  console.log('====ddd==' + error)
  if (error.response.status === 504) {
    return alert('服务器异常')
  }
})

export default {
  userLogin (query) {
    return axios.post('/api/users/login', query)
  },
  userRegister (query) {
    return axios.post('/api/users/register', query)
  },
  searchUser (query) {
    return axios.post('/api/friends/search_user', query)
  },
  addUser (query) {
    return axios.post('/api/friends/add_user', query)
  },
  applicationList (query) {
    return axios.post('/api/friends/get/applicationList', query)
  },
  verifyUser (query) {
    return axios.post('/api/friends/verify_user', query)
  }
}
=======
import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  console.log('======' + error)
  // 对请求错误做些什么
  // return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  console.log(response.status)
  // 对响应数据做点什么
  return response
}, error => {
  console.log('====ddd==' + error)
  if (error.response.status === 504) {
    return alert('服务器异常')
  }
})

export default {
  userLogin (query) {
    return axios.post('/api/users/login', query)
  },
  userRegister (query) {
    return axios.post('/api/users/register', query)
  },
  searchUser (query) {
    return axios.post('/api/friends/search_user', query)
  },
  addUser (query) {
    return axios.post('/api/friends/add_user', query)
  },
  applicationList (query) {
    return axios.post('/api/friends/get/applicationList', query)
  },
  verifyUser (query) {
    return axios.post('/api/friends/verify_user', query)
  }
}
>>>>>>> 5b588de929942f33a910f4fddcdc84b55a2c691f
