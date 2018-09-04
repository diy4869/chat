<template>
  <div class="notice">
    <mt-header title="通知">
      <router-link icon="" slot="right" to="search">添加</router-link>
    </mt-header>
    <router-link to="verify" class="newFriends"  tag="div">
      <span>新好友</span>
      <span> > </span>
    </router-link>
    <ul class="list">
      <li>
        <div>
          <img class="userIcon" src="../../../static/img/test.jpg" alt="">
        </div>
        <div>
          <span>用户名称</span>
          <span>用户发的信息</span>
        </div>
        <div class="time">17:59</div>
      </li>
      <li>
        <span>sdfa</span>
      </li>
    </ul>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul class="num">
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  data () {
    return {
      allLoaded: false,
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      isAnime: false
    }
  },
  created () {
    let notice = 0
    this.$io.on('newFriends', data => {
      notice++
      console.log(data)
      console.log(notice)
    })
  },
  methods: {
    loadTop () {
      let init = this.list[0]
      let len = init - 11
      for (let i = init; i > len; i--) {
        this.list.unshift(i)
        // 加载更多数据
        this.$refs.loadmore.onTopLoaded()
      }
    },
    loadBottom () {
      this.allLoaded = true // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}
</script>
<style lang="scss" scoped>
  .newFriends{
    height: 1rem;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    font-size: .4rem;
    padding: 0 .27rem;
    border-bottom: .2rem solid #f2f2f2;
  }
  .list{
    display: flex;
    flex-direction: column;
    li{
      display: flex;
      flex: 1;
      align-items: center;
      border-bottom: 1.5px solid #26a2ff;
      padding: 8px 0;
      &:last-child{
        border-bottom: 0px solid transparent;
      }
      .userIcon{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transform: translateX(15px)
      }
      div {
        display: flex;
        flex: 1;
        flex-direction: column;
        &:nth-child(2) {
          flex: 4;
          text-indent: 1em;
          span {
            line-height: .67rem;
          }
        }
        span {
          display: flex;

        }
      }
    }
  }
  .num{
    // display: flex;
    // flex-direction: column;
    overflow: auto;
    height: 12.65rem;
    li {
      display: flex;
      flex: 1;
      height: 30px;
      line-height: 30px;
    }
  }
</style>
