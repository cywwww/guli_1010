import axios from 'axios'
import cookie from 'js-cookie'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9001', // api的base_url
  timeout: 5000//
})

// http request 拦截器
service.interceptors.request.use(
  config => {
  // debugger
    if (cookie.get('guli_token')) {
      config.headers['token'] = cookie.get('guli_token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

export default service
