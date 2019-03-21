<template>
  <div class="__home-main">
    <div class="__home-left">
      <aside-view/>
    </div>
    <div class="__home_main">
      <div class="__main_title">
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import AsideView from "./components/Aside"
  import MainView from "./components/Main"
  export default {
    name: "index",
    components:{
      AsideView,
      MainView
    }
  }
</script>

<style scoped lang="stylus">
  @import "~constant/css/variable.styl"
  .__home-main
    width 100%;
    height 100%;
    display flex
    flex-direction row
    .__home_main
      width 100%
    .__home-left
      width $_home_main_aside_width
      height 100%
      background: #000

</style>
