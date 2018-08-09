import request from '../plugins/fly'
import { baseURL } from '@/config'

const api = {
  postToken: (params) => request.post('/token', params, {
    baseURL: baseURL.API
  }),
  getToken: (code) => request.get(`/wechat-mini-program-movin-poster/token?code=${code}`, null, {
    baseURL: baseURL.API
  })
}

export default api
