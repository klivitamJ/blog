<template>
  <div class="__tabs_main" ref="main">
    <div class="__tab_left" v-show="showArrow"></div>
    <ul ref="content" class="__tab_content">
      <li :class="item.id === itemSel?'__tab_item':'__tab_item_normal'" v-for="item in datas" :key="item.id" @click="onTabItemClick(item.id,item)">
        {{item.name}}
      </li>
    </ul>
    <div class="__tab_right" v-show="showArrow"></div>
  </div>

</template>

<script>
  export default {
    name: "index",
    props: {
      datas: {
        type: Array,
        required: true
      }
    },
    methods: {
      onTabItemClick(val, item) {
        if (this.itemSel === val) return;
        this.itemSel = val;
        this.$emit("onTabItemChanged", {pos: val, data: item});
      }
    },
    data() {
      return {
        itemSel: this.datas.length > 0 ? this.datas[0].id : "",
        showArrow: false
      }
    },
    mounted() {
      this.$nextTick(() => {
        let refs = this.$refs
        let childWidth = 0
        for (let width of refs.content.children) {
          childWidth += width.clientWidth
        }
        if (refs.main.clientWidth < childWidth) {
          this.showArrow = true
        }
      })
    }
  }
</script>

<style scoped lang="stylus">
  $tab_button_size_num = 36px


  .tab_item_common
    flex: 0 0 auto
    padding 0 20px
    height 38px
    line-height 38px
    cursor pointer
    float left
    margin 0 10px
    &:first-child
      margin 0 10px 0 0
    &:last-child
      margin 0 0 0 10px

  .tab_button_size
    width $tab_button_size_num
    height $tab_button_size_num
    background-size 100% 100%
    background-repeat no-repeat
    cursor pointer


  .__tabs_main
    width 100%
    min-height 40px
    display flex
    flex-direction row
    ::-webkit-scrollbar
      display none
    .__tab_left
      @extend .tab_button_size
      background-image url("../asserts/img/last_normal.png")
      &:active
        background-image url("../asserts/img/last_sel.png")
    .__tab_right
      @extend .tab_button_size
      background-image url("../asserts/img/next_normal.png")
      &:active
        background-image url("../asserts/img/next_sel.png")
    .__tab_content
      flex 1
      overflow-x auto
      min-height 40px
      margin 0 10px
      list-style: none;
      display: flex
      flex-direction row
      overflow -moz-scrollbars-none;
      .__tab_item_normal
        color #007bff
        background black
        @extend .tab_item_common
      .__tab_item
        color: white
        background red
        @extend .tab_item_common


</style>
