<template>
  <div class="__list_table">
    <anthologies :datas="anthologies"/>
    <articals :datas="articals"/>
    <div class="__artical_content">
      {{anthologies}}
    </div>
  </div>

</template>

<script>
  import Anthologies from "./Anthologies"
  import Articals from "./Artical"

  export default {
    name: "index",
    components: {
      Anthologies,
      Articals
    },
    data() {
      return {
        articals: [{
          id: "00",
          title: "2018-12-03",
          sub: "2018年是一个比较低落的一年",
          count: 137,
          is_submit: 0
        },
          {
            id: "01",
            title: "2018-12-03",
            sub: "2018年是一个比较低落的一年",
            count: 137,
            is_submit: 1
          },
          {
            id: "02",
            title: "2018-12-03",
            sub: "2018年是一个比较低落的一年",
            count: 137,
            is_submit: 0
          }],
        articalIndex: "",
        anthologies: [
          {
            name: "关于android开发的三两事儿",
            id: "0"
          },
          {
            name: "想法",
            id: "1"
          },
          {
            name: "20年代的三两事儿",
            id: "2"
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .__list_table
    width 100%
    height 100%
    display grid
    grid-template-columns: 17% 25% 58%
</style>
