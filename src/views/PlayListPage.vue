<template>
  <div class="playlistwrap">
    <section class="list-head">
      <div class="list-head-bg" :style="bgStyle"></div>
      <div class="getBack" @click="goBack">
        <h3>返回</h3>
      </div>
      <div class="list-head-content">
        <div class="lhc-img">
          <img :src="listDetail.imgUrl" alt="pic">
          <span class="s-icon">歌单</span>
        </div>
        <div class="lhc-info">
          <h2 class="lhc-title">{{ listDetail.name }}</h2>
        </div>
      </div>
    </section>
    <div class='contaniner' ref="wrapper">
      <div>
    <section class="list-info">
      <div class="info-tags">标签:
        <em class="tag" v-for="tag in listDetail.tags" :key="tag">{{ tag }}</em>
      </div>
      <div class="info-intro" v-if="listDetail.des">
        <span>简介：{{ listDetail.des }}</span>
      </div>
    </section>
    <div class="list-song">
      <h3>歌曲列表</h3>
      <song-item v-for="item in listDetail.music" :key="item.id" :music="item"></song-item>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SongItem from "@/components/SongItem/index.vue";
import BScroll from 'better-scroll'
export default {
  components: {
    SongItem
  },
  computed: {
    ...mapGetters(["listDetail"]),
    bgStyle() {
      return {
        backgroundImage: "url(" + this.listDetail.imgUrl + ")"
      }
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
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
@import "../styles/playlist_page.css";
.contaniner{
    position:fixed;
    overflow:hidden;
    right:0;
    left:0;
    bottom:0;
    top:170px;
  }
</style>
