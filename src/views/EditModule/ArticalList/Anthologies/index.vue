<template>
  <div class="__anthology_list">
    <div class="__comeback">返 回</div>
    <ul>
      <div class="__create_anthology">
        <div class="add"></div>
        新建文档
      </div>
      <li>
        <div>
          <input placeholder="请输入文集名..." width="100%" height="35"/>
          <div>
            <button class="__create_anthology_submit">提 交</button>
            <button class="__create_anthology_cancel">取 消</button>
          </div>
        </div>
      </li>

    </ul>

    <div v-for="item in datas" :key="item.id" class="__anthology-content">
      <div v-if="anthologyIndex===item.id" class="__anthology-index-sel">
        {{item.name}}
      </div>
      <div class="__anthology-index">
        {{item.name}}
      </div>
    </div>

    <div class="__anthology_bottom">
      <div class="bottom_setting">设置</div>
      <div class="bottom_question">遇到问题</div>
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
        anthologyIndex: this.datas.length > 0 ? this.datas[0].id : ""
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~constant/css/custom.styl"
  .list-item
    height 40px
    line-height 40px
    font-size 15px
    color #f2f2f2
    padding 0 15px
    cursor pointer


  .__anthology_list
    width 100%
    background #404040
    .__anthology_bottom
      position: fixed;
      bottom: 0;
      height: 50px;
      line-height: 50px;
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 17%;
      font-size: 15px;
      padding-left: 15px;
      padding-right 15px
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      z-index: 150;
      background-color: #404040;
      .bottom_question
        float right
        color: #999
        font-size 15px
      .bottom_setting
        float left
        color: #999
        font-size 15px
    .__anthology-content
      width auto
      .__anthology-index-sel
        @extend .list-item
        border-left 3px solid #ec7259
        background #666
      .__anthology-index
        @extend .list-item
        &:hover
          background #666
    ul
      margin 20px 20px 10px 20px
      li
        .__create_anthology_cancel
          color: #999
          padding 4px 12px
          margin 4px
          font-size 14px
          background-color: #404040
          border none
        .__create_anthology_submit
          color: #42c02e
          border 1px solid #42c02e
          padding 4px 12px
          background-color: #404040
          text-align center
          border-radius 21px
          font-size 14px
          margin 4px
        input
          margin 10px 0
          width 100%
          box-sizing: border-box;
          height: 35px;
          color: #ccc;
          background-color: #595959;
          border: 1px solid #333;
          padding: 4px 6px
          font-size: 14px;
          line-height: 20px;
      .__create_anthology
        color white
        font-size 14px
        .add
          plus_icon(12px, 4px)
          display inline-block
    .__comeback
      margin 30px 18px 5px 18px
      border 1px solid #ec7259
      color: #ec7259
      text-align center
      height 42px
      line-height 42px
      border-radius 21px
      font-size: 15px

</style>
