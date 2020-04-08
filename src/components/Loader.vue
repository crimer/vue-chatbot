<template>
  <div class="loader">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="stylus">
@import '~@/assets/stylus/_colors.styl'
@import '~@/assets/stylus/loader.styl'
</style>
