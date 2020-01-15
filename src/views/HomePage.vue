<template>
  <div>
    <home-top></home-top>
    <div class='contaniner' ref="wrapper">
      <div>
    <keep-alive>
      <component :is="tabName"></component>
      <!-- 动态绑定组件名字 根据HomeTop中 tab-item 传来的组件名渲染不同的组件 -->
    </keep-alive>
  </div>
  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import HomeTop from "@/components/HomeTop/index.vue";
import TabIndex from "@/components/TabIndex/index.vue";
import TabRank from "@/components/TabRank/index.vue";
import TabSearch from "@/components/TabSearch/index.vue";

export default {
  data: () => ({
    tabName: "TabIndex"
    //默认显示TabIndex组件
  }),
  components: {
    HomeTop,
    TabIndex,
    TabRank,
    TabSearch
    //引用需要渲染的组件
  },
   mounted(){
    // this.getData()
     this.scroll = new BScroll(this.$refs.wrapper,{
       click:true,
       pullDownRefresh:true,
       probeType: 2,
       mouseWheel: true
     })
     //在整体组件中显示 需要将组件头部的高度隔离出来 如下CSS代码张的top:0.88rem 这样滚动就不会影响头部输入框了
  }
}
</script>
<style scoped>
  .contaniner{
    position:fixed;
    overflow:hidden;
    right:0;
    left:0;
    bottom:0;
    top:108px;
  }
</style>
