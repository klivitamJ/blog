<template>
  <div class="__aside-main">
    <div class="__aside-icon"></div>
    <div class="__aside_sub">用心创造出价值</div>
    <aside-content :datas="tabs" @onItemChangeClick="onItemChangeClick"/>
  </div>
</template>

<script>
  import AsideContent from "./aside_tab/index"
  import icon from "./asserts/js/index"
  export default {
    name: "index",
    components:{
      AsideContent
    },
    data() {
      return {
        tabs: [
          {
            name:"首页",
            id:"0"

          },
          {
            name: "技术杂谈",
            id: "1",
            child: [
              {
                name: "前端技术",
                id: "01"
              },
              {
                name: "移动端技术",
                id: "02"
              }
            ]
          },
          {
            name: "生活琐事",
            id: "2",
            child: [
              {
                name: "相片",
                id: "11"
              }
            ]
          },
          {
            name: "介绍介绍",
            id: "3",
            child: [
              {
                name: "个人介绍",
                id: "21"
              }
            ]
          }
        ]
      }
    },
    methods:{
      onItemChangeClick(){
      }
    }
  }
</script>

<style scoped lang="stylus">
  .__aside-main
    display flex
    flex-direction column
    align-items center
    padding 30px 0
    color white
    .__aside_sub
      font-size 12px
      color: #686868
      margin-bottom 20px
      font-weight bold
    .__aside-icon
      width 114px
      height 80px
      background url("~assets/logo.png")
      background-size 100% 100%
      background-repeat no-repeat

</style>
