<template>
	<div class="others-wrap">
		<mu-appbar class="appbar-fixed">
		  <mu-icon-button icon='menu' slot="left" v-touch:tap="toggle"/>
		  <div class="_title" slot="left">{{ otherThemesList.name }}</div>
		  <mu-icon-button icon="add" slot="right"/>
		</mu-appbar>
		<div class="details-top">
	      <img :src="attachImageUrl(otherThemesList.image)">
	      <span class="top-title">{{otherThemesList.description}}</span>
	    </div>
	    <div class="item-wrap">
	        <div class="item-title">
	        	<div class="_edi">主编</div>
	        	<img :src="attachImageUrl(editor.avatar)" v-for="(editor,index) in otherThemesList.editors" :key="editor.id">  	
	        </div>
	        <div class="item-content" v-for="(otherThemesItem,index) in otherThemesList.stories" :key="otherThemesItem.id">
	          <router-link :to="{ name: 'homeD', params: { id: otherThemesItem.id }}" class="routerA"></router-link>
	          <p class="_text">{{otherThemesItem.title}}</p>
	          <img :src="attachImageUrl(otherThemesItem.images)" :alt="otherThemesItem.title">
	        </div>
      	</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	  data () {
	    return {
	    	otherThemesList: {}
	    }
	  },
	  computed: {
	  },
	  mounted() {
	  	this.$nextTick(function() {
	  		this.getOtherThemesList();
	  		this.$store.state.showHF = false
	  	})
	  },
	  methods: {
	    toggle (flag) {    	
			this.$store.dispatch('changeFlag')
	    },
	    getOtherThemesList: function () {
	    	let id = this.$route.params.id
	    	axios.get('https://zhihu-daily.leanapp.cn/api/v1/themes/'+id)
	          .then(res => {
	            this.otherThemesList = res.data.THEMEDES;
	          })
	          .catch(err => console.log(err))

	    },
	    // 修改图片链接
	      attachImageUrl: function(srcUrl) {
	      	if(typeof srcUrl == 'object' || typeof srcUrl == 'undefined') {
	      		return srcUrl = 'https://images.weserv.nl/?url=pic1.zhimg.com/v2-4a179366fa7fa7ec7701425207f9930c.jpg'
	      	}
	        if (srcUrl !== undefined) {
	          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
	        }
	      },
	  },
 
}
</script>
<style type="text/css" scoped>
  .appbar-fixed {
	position: fixed;
    top: 0;
    -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
    transition: all .45s cubic-bezier(.23,1,.32,1);
  }
  .details-top{
    height: 130px;
    position: relative;
    overflow-y: hidden;
    z-index: 99;
  }  
  .details-top img{
    position: absolute;
    left: 0;
    width: 100%;
  }  
  .details-top .top-title{
    position: absolute;
    bottom: 15px;
    left: 0px;
    width: 100%;
    font-size: 18px;
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
    display: flex;
    align-items: center;
  }
  .item-title img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 15px;
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
  .routerA {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
  }
</style>