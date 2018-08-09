export default {
  methods: {
    $_init () {
      return new Promise((resolve, reject) => {
        const token = wx.getStorageSync('token')
        if (!token) {
          wx.login({
            success: res => {
              console.log(res)
            }
          })
        } else {
          this.$http.config.headers['Authorization'] = `Bearer ${token}`
          resolve()
        }
      })
    }
  }
}
