<template>
    <div class="index-wrap">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(topMeg,index) in megs.top_stories" :key="topMeg.id">
          <router-link :to="{ name: 'homeD', params: { id: topMeg.id }}" class="routerA"></router-link>  
          <img :src="attachImageUrl(topMeg.image)" :alt="topMeg.title">
          <span class="top-story-title">{{topMeg.title}}</span>     
        </mt-swipe-item>
      </mt-swipe>
      <div class="item-wrap" :class="{ 'nightColor': active }">
        <div class="item-title">今日热闻</div>
        <div class="item-content" v-for="(meg,index) in megs.stories" :key="meg.id" :class="{ 'nightContentColor' : active }">
          <router-link :to="{ name: 'homeD', params: { id: meg.id }}" class="routerA"></router-link>  
          <p class="_text">{{meg.title}}</p>
          <img :src="attachImageUrl(meg.images[0])" :alt="meg.title">
        </div>
        <div class="item-title">{{ modifyDate(date) }}</div>
        <div class="item-content" v-for="(beforeMeg,index) in beforeMegs.stories" :key="beforeMeg.id" :class="{ 'nightContentColor' : active }">
          <router-link :to="{ name: 'homeD', params: { id: beforeMeg.id }}" class="routerA"></router-link>  
          <p class="_text">{{beforeMeg.title}}</p>
          <img :src="attachImageUrl(beforeMeg.images[0])" :alt="beforeMeg.title">
        </div>
      </div>   
    </div>   
</template>

<script>
import axios from 'axios'
import { Indicator } from 'mint-ui';
export default {

  data () {
    return {
      date: '',
      megs: {},
      beforeMegs: {}
    }
  },
  computed: {
  	  limit() {
        return this.$store.state.limit
      },
      active () {
        return this.$store.state.active
      }
    },
  mounted() {
     this.$nextTick(function() {
        this.getMeg()
        this.$store.state.showHF = true
     })
  },
  methods: {
    getMeg: function (){
      Indicator.open();
      axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories')
        .then(res => {
            let stories = res.data.STORIES;
            this.megs = stories;
            this.date = (parseInt(stories.date)-1).toString();
            axios.get('https://zhihu-daily.leanapp.cn/api/v1/before-stories/'+ this.date)
              .then(res => {
                  this.beforeMegs = res.data.STORIES;
                  Indicator.close();
              })
              .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    },
    // 修改图片链接
    attachImageUrl: function (srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
    },
    modifyDate: function(str) {
      var y = str.substring(0,4);
      var m = str.substring(4,6);
      var d = str.substring(6,8);
      return y+'年'+m+'月'+d+'日'
    }
  },
}
</script>

<style lang="css" scoped>
  .item-wrap {
    display: flex;
    flex-direction: column;
    background: #f3f3f3;
  }
  .item-title {
    font-size: 14px;
    text-align: left;
    padding-left: 20px;
    margin: 10px 0;
    color: #b9b4b4;
  }
  .item-content {
    position: relative;
    display: flex;
    height: 100px;
    flex-direction: row;
    justify-content: space-around;  
    border: 1px solid #eee;
    border-radius: 6px;
    margin: 5px 10px;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0px 1px 2px #cecdcd;
    background: #fff;
  }
  ._text {
    width: 65%;
    display: flex;
    align-items: center;
    text-align: left;
    color: #000;
  }
  .item-content img {
    height: 100%;
  }
  .mint-swipe {
    width: 100%;
    height: 200px;
  }
  .mint-swipe-item img {
    width: 100%;
    position: absolute;
    left: 0;
    top: -60px;
  }
  .top-story-title {
    position: absolute;
    bottom: 25px;
    left: 0px;
    width: 100%;
    font-size: 20px;
    color: #e6e5e5;
    text-align: left;
    padding: 0 16px;
    letter-spacing: 1px;
  }
  .routerA {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
  }
  .nightColor {
    background: #000;
  }
  .item-content.nightContentColor {
    border: 1px solid #000;
    box-shadow: 0px 1px 2px #000;
    background: #3a3939;
  }
  .item-content.nightContentColor ._text {
    color: #ccc;
  }
</style>