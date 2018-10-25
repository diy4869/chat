<template>
  <div class="my">
    <mt-header title="我">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="header">
      <div class="icon" @click="preview">
        <img :src="icon" alt="">
      </div>
      <div class="userInfo">
        <span>{{data.username}}</span>
        <span>{{data.user_id}}</span>
      </div>
    </div>
    <!-- <div class="content"></div> -->
    <transition name="zoomIn"  enter-active-class="zoomIn">
      <div class="preview" v-show="show ? true : false">
        <mt-header title="预览">
          <mt-button slot="left" icon="back" @click="back">返回</mt-button>
          <mt-button slot="right" @click.native="crop">编辑</mt-button>
        </mt-header>
        <vueCropper
          ref="cropper"
          :img="icon"
          v-model="option.canMoveBox"
          :outputSize="option.size"
          :outputType="option.outputType"
        ></vueCropper>
    </div>
    </transition>
  </div>
</template>
<script>
import VueCropper from 'vue-cropper'
export default {
  components: {
    VueCropper
  },
  data () {
    return {
      data: JSON.parse(localStorage.getItem('userInfo')),
      icon: '../../../static/img/22.jpg',
      show: false,
      animation: 'zooIn',
      crap: false,
      option: {
        img: '',
        size: 1,
        // 是否输出原比例
        full: false,
        // 输出图片格式
        outputType: 'png',
        canMove: true,
        // 裁剪框大小 是否固定
        fixedBox: false,
        // 上传图片是否原始宽高
        original: false,
        // 是否可拖拽裁剪框
        canMoveBox: true,
        autoCrop: true
      }
    }
  },
  created () {
    console.log(this.data)
  },
  methods: {
    preview () {
      console.log(1)
      this.show = true
      console.log(this.show)
    },
    back () {
      this.show = false
    },
    crop () {
      console.log(1)
      // start
      this.crap = true
      this.$refs.cropper.startCrop()
    }
  }
}
</script>
<style lang="scss" scoped>
  .my {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .cropper-crop-box {
    transform: translate3d(0px, 0px, 0px) !important;
  }
  .preview {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    z-index: 1;
    img {
      width: 100%;
      height: calc(100% - 40px);
      background-size: 100% 100%;

    }
  }
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 2rem;
    border-bottom: 0.3rem solid #eeeeee;
    .icon {
      width: 1.34rem;
      height: 1.34rem;
      margin-left: .53rem;
      img {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        border-radius: 50%;
      }
    }
    .userInfo {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin-left: 0.2rem;
      span {
        margin: 0.2rem 0;
      }
    }
  }
  .content {
    height: 13.1rem;
    // border: 2px solid red;
  }
</style>
