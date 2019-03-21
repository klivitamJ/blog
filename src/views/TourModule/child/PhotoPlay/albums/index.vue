<template>
  <div class="__albums_content">
    <div v-for="(item,index) in datas" :key="item.id" class="__albums_item"
         :style="{backgroundImage:'url('+item.url+')'}"
         @click="onItemClick(item.id,index,datas)">
    </div>
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
      onItemClick(pos, index, arrays) {
        this.$emit("onImgItemClick", {
          pos: pos,
          index: index,
          datas: arrays
        })

      }
    }
  }
</script>

<style scoped lang="stylus">
  .__albums_content
    margin-top 30px
    display grid
    grid-template-columns: 25% 25% 25% 25%
    .__albums_item
      -webkit-background-size: 100% 100%
      background-size: 100% 100%
      background-repeat: no-repeat
      height 190px
      cursor zoom-in


</style>
