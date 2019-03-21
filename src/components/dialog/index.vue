<template>
  <transition>
    <div class="__dialog_warpper" v-show="visible">
      <div class="__dialog">
        <div class="__dialog__header">
          <slot name="title">
            <span class="__dialog__title">{{ title }}</span>
          </slot>
          <button
            type="button"
            class="__dialog__headerbtn"
            aria-label="Close"
            @click="handleClose">
            关闭
          </button>
        </div>
        <div class="__dialog__body" v-if="rendered">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "index",
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: "提示"
      }
    },
    watch: {
      visible(newV, oldV) {
        if (newV) {
          this.$nextTick(() => {
            this.rendered = true
          })
        }
      }
    },
    methods:{
      handleClose(){
        this.$emit("onDialogClose")
      }
    },
    data() {
      return {
        rendered: false
      }
    },

    mounted() {
      if (this.visible) {
        this.rendered = true
      }
    }
  }
</script>

<style scoped lang="stylus">
  .__dialog_warpper
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    overflow: auto;
    margin: 0
    background: rgba(0, 0, 0, 0.5)
    .__dialog
      position: relative;
      margin: 0 auto 50px;
      margin-top 5%
      overflow auto
      border-radius: 2px;
      -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      background white
      opacity 1
      min-height 30%
      width: 50%
      .__dialog__headerbtn
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: 0 0;
        border: none;
        outline: 0;
        cursor: pointer;
        font-size: 16px
      .__dialog__header
        padding: 20px 20px 10px
        .__dialog__title
          line-height: 24px;
          font-size: 18px;
          color: #303133;
      .__dialog__body
        padding: 30px 20px;
        color: #606266;
        font-size: 14px
        min-height 300px

</style>
