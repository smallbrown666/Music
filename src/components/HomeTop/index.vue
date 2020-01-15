<template>
  <div class="top">
    <div class="home-top">
      <div class="top-fix">
        <img src="./logo.svg" alt="logo" class="topsvg">
        <!-- <div class="topfr">
          <span>下载APP</span>
        </div> -->
      </div>
      <tab bar-active-color="#d43c33" active-color="#d43c33">
        <tab-item selected @on-item-click="setTab('TabIndex')">推荐音乐</tab-item>
        <tab-item @on-item-click="setTab('TabRank')">热歌榜</tab-item>
        <tab-item @on-item-click="setTab('TabSearch')">搜索</tab-item>
        <!-- 组件自带的@on-item-click onItemClick()方法 实现使用vux的可滑动的tab -->
      </tab>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem } from "vux";

export default {
  components: {
    Tab,
    TabItem
  },
  methods: {
    setTab(val) {
      this.$parent.tabName = val;
      // console.log(this.$parent)
    }
  }
}
</script>

<style scoped>
.top{
    height: 108px;
}
.vux-tab .vux-tab-item{
    font-size: 15px;
}
.vux-tab-item a{
    display: block;
    width: inherit;
    height: inherit;
}
.home-top{
    position: fixed;
    top:0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 108px;
}
.top-fix{
    display: flex;
    padding: 0 20px;
    width: 100%;
    height: 64px;
    background-color: #d43c33;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
}
.topsvg{
    width: 142px;
    height: 25px;
    overflow: hidden;
}
.topfr span{
    position: relative;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    color: #fff;
    font-size: 15px;
    border: 1px solid white;
    border-radius: 37.5%/100%;
    cursor: pointer;
}

</style>
