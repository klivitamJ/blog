<template>
  <div class="__aside_content">
    <ul v-for="(item,index) in datas" :key="item.id">
      <div :class="{'__title_sel':selItem==index,'__aside-content-item-title':true}"
           @click="itemClick(item.id,item)"
           @mouseover="hoverIndex=index"
           @mouseout="hoverIndex=-1">
        <div class="__icon" :style="{backgroundImage:'url('+getIcon(index)+')'}"></div>
        {{item.name}}
      </div>
      <transition :duration="{ enter: 500, leave: 0 }">
        <div v-show="selItem === item.id">
          <li v-for="childItem in item.child" :key="childItem.id" @click="onChildItemClick(childItem.id,childItem)"
              :class="getChildClass(childItem.id)">
            {{childItem.name}}
          </li>
        </div>
      </transition>
    </ul>
  </div>
</template>

<script>
  const icons = [
    {
      nomal: require("../asserts/img/ic_circle_normal.png"),
      sel: require("../asserts/img/ic_circle_sel.png")
    },
    {
      nomal: require("../asserts/img/ic_tri_normal.png"),
      sel: require("../asserts/img/ic_tri_sel.png")
    }];
  export default {
    name: "index",
    props: {
      datas: {
        required: true,
        type: Array
      }
    },
    methods: {
      getIcon(index) {
        let isTure = this.hoverIndex == index || this.selItem == index;
        let lenght = index % icons.length;
        console.log(index, isTure)
        return isTure ? icons[lenght].sel : icons[lenght].nomal;
      },
      getChildClass(val) {
        return this.selChildItem === val ? '__li_sel' : ''
      },
      itemClick(val, item) {
        this.selItem = val;
        this.selChildItem = item.child && item.child.length > 0 ? item.child[0].id : "";
        this.$emit("onItemChangeClick", {id: val, data: item.child && item.child.length > 0 ? item.child[0] : null})
      },
      onChildItemClick(val, item) {
        if (this.selChildItem === val) return
        this.selChildItem = val
        this.$emit("onItemChangeClick", {id: val, data: item})
      }
    },
    data() {
      return {
        hoverIndex: -1,
        selItem: this.datas.length > 0 ? this.datas[0].id : "",
        selChildItem: this.datas.length && this.datas[0].child && this.datas[0].child.length > 0 ? this.datas[0].child[0].id : ""
      }
    }
  }
</script>

<style scoped lang="stylus">


  .__title_sel
    background white
    color: #222

  .__li_sel
    background #888888
    color: white !important
    opacity 0.4

  .__aside_content
    width 100%
    li
      padding 9px
      font-size 12px
      text-align center
      color #686868
      cursor: pointer;
      &:hover
        @extend .__li_sel
    .__aside-content-item-title
      padding 7px
      font-size 14px
      font-weight bold
      display flex
      flex-direction column
      align-items center
      cursor pointer
      .__icon
        width 20px
        height 20px
        margin-bottom 3px
        background-size 100% 100%
        background-repeat no-repeat
      &:hover
        background white
        color: #222

</style>
