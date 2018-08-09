<template>
  <div class="p-home">
  </div>
</template>

<script>

export default {
  onShow () {
    this.$_init().then(() => {
    })
    wx.getSystemInfo({
      success: res => {
        this.windowHeight = res.windowHeight
      }
    })
  }
}
</script>

<style lang="scss">
@import "./style";
</style>
