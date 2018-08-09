export default {
  methods: {
    $_toast (tips) {
      wx.showToast({
        title: tips,
        icon: 'none',
        duration: 1500
      })
    }
  }
}
