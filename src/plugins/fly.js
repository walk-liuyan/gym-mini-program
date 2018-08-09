import wx from 'wx'
import Fly from 'flyio'

let instance = new Fly()

instance.interceptors.request.use((request) => {
  wx.showLoading({
    title: 'Loading'
  })
  return request
})

instance.interceptors.response.use(
  (response, promise) => {
    setTimeout(() => {
      wx.hideLoading()
    }, 10)
    return promise.resolve(response.data)
  },
  (error, promise) => {
    setTimeout(() => {
      wx.hideLoading()
    }, 10)
    if (process.env.NODE_ENV === 'development') {
      let err = '未知错误'
      let status = '000'
      if (error.response) {
        status = error.response.status
        if (status === 400) { // 没有授权令牌
          err = '没有授权令牌'
        } else if (status === 401) { // 授权令牌过期
          err = '授权令牌过期'
        } else if (status === 422) { // 业务逻辑错误
          err = error.response.data.error
        } else if (status >= 500) { // 服务异常
          err = error.response.data.error || '服务异常'
        }
      }
      console.error(`[${status}] ${err}`)
      wx.showToast({
        title: `[${status}] ${err}`,
        icon: 'none',
        duration: 2000
      })
    }
    return promise.resolve()
  }
)

export default instance
