<template>
  <div class="details-wrap">
    <mu-appbar class="appbar-fixed m-appbar" :class="{ 'nightColor' : active }">
      <mu-icon-button icon='arrow_back' slot="left" @click="back"/>
      <mu-icon-button icon="share" slot="right"/>
      <mu-icon-button icon="star" slot="right" @click="getStar"/>
      <mu-icon-button icon="insert_comment" slot="right" @click="commentsList"/>
      <div class="_m" slot="right">{{comments}}</div>
      <mu-icon-button icon="thumb_up" slot="right" @click="addPopularity" :class="{ 'active': flag }"/>
      <div class="_m love" slot="right">{{popularity}}</div>
    </mu-appbar>
    <div class="details-top">
      <img :src="attachImageUrl(datas.image)" :alt="datas.title">
      <span class="top-title">{{datas.title}}</span>
      <span class="image-source">图片：{{datas.image_source}}</span>
    </div>
    <div v-html="details"></div>
  </div>
  
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        comments: '',
        popularity: '',
        details: '',
        datas: {},
        flag: false
      }
    },
    computed: {
      active () {
        return this.$store.state.active
      }
    },
    mounted() {
       this.$nextTick(function() {
          this.getDetail()
          this.$store.state.showHF = false
       })
    },
    methods: {
      getDetail: function(){
        let id = this.$route.params.id
        axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/'+ id)
          .then(res => {
            this.details = this.attachBody(res.data.CONTENTS.body);
            this.datas = res.data.CONTENTS;

          })
          .catch(err => console.log(err))

        axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/extra/'+ id)
          .then(res => {
            this.comments = res.data.DES.comments;
            this.popularity = res.data.DES.popularity;

          })
          .catch(err => console.log(err))       
      },
      // 修改图片链接
      attachImageUrl: function(srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
      },
      // 修改返回数据中的body中的图片链接
      attachBody: function(body) {
        return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
      },
      addPopularity: function() {
        if(!this.flag) {
          this.popularity += 1;
          this.flag = true;
        }else {
          this.popularity -= 1;
          this.flag = false;
        }
      },
      commentsList: function() {
        let id = this.$route.params.id
        this.$router.replace('/comments/'+id)
      },
      getStar: function() {
        Toast('收藏成功')
      },
      back: function() {
        this.$router.replace('/')
      }
    }
  }
</script>

<style lang="css" scoped>
@import "/static/css/zhihu_css.css";
.appbar-fixed {
    position: fixed;
      top: 0;
      -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
      transition: all .45s cubic-bezier(.23,1,.32,1);
  }
  ._m {
    font-size: 12px;
    margin-left: -6px;
    margin-right: 10px;
  }
  .mu-appbar.m-appbar .right {
    margin-right: 10px;
  }
  .details-top{
    height: 200px;
    position: relative;
    overflow-y: hidden;
    z-index: 99;
  }  
  .details-top img{
    position: absolute;
    left: 0;
    top: -60px;
    width: 100%;
  }  
  .details-top .top-title{
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
  .details-top .image-source{
    position: absolute;
    right: 8px;
    right: 20px;
    bottom: 10px;
    font-size: 12px;
    color: #ccc;
  }
  .mu-icon-button.active {
    color: #f5b84a !important;
  }
  .nightColor {
    background: #000;
  }
  .content-wrap.nightContentColor {
    background: #000;
  }
  .content-wrap.nightContentColor .question-title, .content-wrap.nightContentColor .meta .author, .content-wrap.nightContentColor .content p {
    color: #ccc;
  }

</style>
