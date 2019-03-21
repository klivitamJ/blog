<template>
  <div class="__artical_list">
    <div class="__create_artical">
      <div class="add"></div>
      新建文章
    </div>
    <div v-for="item in datas" :key="item.id">
      <div :class="{'__artical_main_sel':articalIndex===item.id,'__artical_main':true}">
        <div class="__artical_content">
          <div class="__artical_content_txt">
            <div class="content__title">{{item.title}}</div>
            <div class="content__sub">{{item.sub}}</div>
          </div>
          <div class="__artical_content_setting" v-show="articalIndex===item.id"></div>
        </div>
        <div class="artical-submit-state"></div>
        <div class="artical_count" v-show="articalIndex===item.id">字数:{{item.count}}</div>
      </div>
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
    data() {
      return {
        articalIndex: this.datas.length > 0 ? this.datas[0].id : ""
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~constant/css/custom.styl"
  .__artical_list
    width: 100%
    border-right: 1px solid #d9d9d9;
    overflow-y scroll
    .__artical_main_sel
      border-left: 5px solid #ec7259;
      background-color #e6e6e6 !important
    .__artical_main
      position: relative;
      box-shadow: 0 0 0 1px #d9d9d9;
      -webkit-box-shadow: 0 0 0 1px #d9d9d9;
      height: 60px;
      color: #595959;
      background-color: #fff;
      margin-bottom: 0;
      padding: 15px 10px 15px 60px;
      list-style: none;
      line-height: 60px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      &:hover
        background-color #e6e6e6
      .artical-submit-state
        position: absolute;
        top: 30px;
        left: 20px;
        width: 22px;
        height: 30px;
        background: url("./img/img.png") no-repeat 0 -25px;
        background-size: 250px;
      .artical_count
        position: absolute;
        bottom: 2px;
        left: 5px;
        font-size: 9px;
        line-height: 16px;
        color: #595959;
      .__artical_content
        display flex
        flex-direction row
        align-items center
        .__artical_content_setting
          gear_icon(14px, 4px, 3px)
        .__artical_content_txt
          width 100%
          flex: 1
          .content__sub
            color: #595959
            font-size 14px
            height 30px
            line-height 30px
          .content__title
            color: #333
            font-size 18px
            height 30px
            line-height 30px
    .__create_artical
      height 20px
      padding 20px 25px
      line-height 22px
      font-size 15px
      -webkit-box-shadow: 0 1px 0 0 #d9d9d9;
      box-shadow: 0 1px 0 0 #d9d9d9;
      .add
        plus_icon(10px, 2px)
        background-color #404040
        padding 2px
        border-radius 8px
        display inline-block
        margin-top 3px


</style>
