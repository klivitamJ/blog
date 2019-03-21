<template>
  <div class="__album-main">
    <div class="__album-title">
      <div>

      </div>

    </div>
    <section class="__album-content">
      <div class="container">
        <div class="__title">
          <div class="__title-content">
            相册
          </div>
          <div class="block"></div>
        </div>
        <div class="__album-types">
          <tabs-view :datas="tabs" @onTabItemChanged="onAlbumChanged"/>
        </div>
        <div class="__album_area">
          <albums-view :datas="albums" @onImgItemClick="onImgItemClick"/>
        </div>
      </div>
    </section>
    <div>
      <dialog-view
        @onDialogClose="imgDialogVisible = false"
        :visible="imgDialogVisible">
        <img :src="dialogImg"/>
      </dialog-view>
    </div>
  </div>
</template>

<script>
  import TabsView from "./tabs/index"
  import AlbumsView from "./albums/index"
  import DialogView from "components/dialog"

  export default {
    name: "index",
    components: {
      TabsView,
      AlbumsView,
      DialogView
    },
    methods: {
      onImgItemClick({pos, index, datas}) {

        this.dialogImg = datas[index].url
        this.imgDialogVisible = true

      },
      onAlbumChanged(pos, item) {

      }
    },
    data() {
      return {
        tabs: [
          {
            name: "item1",
            id: "0"
          },
          {
            name: "item2",
            id: "1"
          },
          {
            name: "item3",
            id: "2"
          },
          {
            name: "item4",
            id: "3"
          },
        ],
        albums: [
          {
            id: 0,
            title: "第一张图",
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553574409&di=c2a73cd361d7448692fc102ebd94b0a9&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F30%2F20140830170758_Ed8yF.jpeg"
          },
          {
            id: 1,
            title: "第二张图",
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553574409&di=c2a73cd361d7448692fc102ebd94b0a9&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F30%2F20140830170758_Ed8yF.jpeg"
          },
          {
            id: 2,
            title: "第三张图",
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553574409&di=c2a73cd361d7448692fc102ebd94b0a9&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F30%2F20140830170758_Ed8yF.jpeg"
          },
          {
            id: 3,
            title: "第三张图",
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553574409&di=c2a73cd361d7448692fc102ebd94b0a9&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F30%2F20140830170758_Ed8yF.jpeg"
          },
          {
            id: 4,
            title: "第三张图",
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553574409&di=c2a73cd361d7448692fc102ebd94b0a9&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F30%2F20140830170758_Ed8yF.jpeg"
          },
          {
            id: 5,
            title: "第三张图",
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553574409&di=c2a73cd361d7448692fc102ebd94b0a9&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F30%2F20140830170758_Ed8yF.jpeg"
          },
          {
            id: 6,
            title: "第三张图",
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553574409&di=c2a73cd361d7448692fc102ebd94b0a9&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F30%2F20140830170758_Ed8yF.jpeg"
          },
          {
            id: 7,
            title: "第三张图",
            url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553574409&di=c2a73cd361d7448692fc102ebd94b0a9&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F30%2F20140830170758_Ed8yF.jpeg"
          }

        ],
        dialogImg: "",
        imgDialogVisible: false
      }
    }
  }
</script>

<style scoped lang="stylus">
  $min_album_title_height = 300px
  $album-content_width = 1046px
  .__album-main
    width 100%
    height 100%
    text-align center
    .__album-content
      width $album-content_width
      height 640px
      position relative
      left 50%
      right 0
      top -140px
      margin-left -($album-content_width/ 2)
      padding 32px
      background #1d1c1b
      border-radius 30px
      .container
        width 100%
        .__album_area
          width 100%
          height 100%
        .__title
          width 100%
          margin 10px 0 20px
          .__title-content
            font-size 40px
            color: white
            text-align left
            letter-spacing 1.5
            margin-bottom 10px
          .block
            width: 70px;
            display: block;
            height: 2px;
            background: #dba539;
            background: -moz-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
            background: -webkit-linear-gradient(-45deg, #dba539 0%, #dc143c 100%);
            background: linear-gradient(135deg, #dba539 0%, #dc143c 100%);
    .__album-title
      min-height $min_album_title_height
      width 100%
      background #e64c3e

</style>
