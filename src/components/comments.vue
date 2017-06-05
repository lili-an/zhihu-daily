<template lang="html">
	<div class="comments_wrap">
	  <mu-appbar class="appbar-fixed m-appbar">
      <mu-icon-button icon='arrow_back' slot="left" @click="backspace"/>
      <div slot="left" class="comments-num">{{commentsNum}}条点评</div>
      <mu-icon-button icon="border_color" slot="right" @click="editor"/>
      </mu-appbar>
      <!-- long Comments -->
      <div class="lang_comments_num">{{longCommentsNum}}条长评</div>
      <div class="comments_item" v-for="(longComment,index) in longComments" :key="longComment.id">
      	<div class="item-left">
      		<img :src="attachImageUrl(longComment.avatar)">
      	</div>
      	<div class="item-right">
      		<div class="right-top">
      			<div class="author">{{longComment.author}}</div>
      			<div class="likes">
      				<mu-icon-button icon="thumb_up" class="thumb_up"/>
      				<div>{{longComment.likes}}</div>
      			</div>
      		</div>
      		<p class="right-middle">{{longComment.content}}</p>
      		<p class="right-bottom">{{ formatDate(longComment.time) }}</p>
      	</div>
      </div>
      <!-- short Comments -->
      <div class="short_comments_num" @click="getShortComments">
          <div class="short-txt">{{shortCommentNum}}条短评</div>
		  <mu-icon-button icon="expand_more" slot="right" :class="{'short-more' : shortMoreIcon}"/>
      </div>
      <div class="comments_item" v-for="(shortComment,index) in shortComments" :key="shortComment.id">
      	<div class="item-left">
      		<img :src="attachImageUrl(shortComment.avatar)">
      	</div>
      	<div class="item-right">
      		<div class="right-top">
      			<div class="author">{{shortComment.author}}</div>
      			<div class="likes">
      				<mu-icon-button icon="thumb_up" class="thumb_up"/>
      				<div>{{shortComment.likes}}</div>
      			</div>
      		</div>
      		<p class="right-middle">{{shortComment.content}}</p>
      		<p class="right-bottom">{{ formatDate(shortComment.time) }}</p>
      	</div>
      </div>
	</div>
</template>
<script>
import axios from 'axios'
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
	export default {
	  data () {
	    return {
	    	commentsNum: '',
	    	longCommentsNum: '',
	    	shortCommentNum: '',
	    	longComments: [],
	    	shortComments: [],
	    	commentsFlag: false,
	    	shortMoreIcon: false
	    }
	  },
	  computed: {
	  	active () {
	      return this.$store.state.active
	    }
      },
	  mounted() {
	     this.$nextTick(function() {
	        this.getLangComments()
	        this.$store.state.showHF = false
	     })
	  },
	  methods: {
	    getLangComments: function (){
    	  Indicator.open();
	      let id = this.$route.params.id
	        axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/'+ id +'/long-comments')
	          .then(res => {
	            this.longComments = res.data.COMMENTS.comments;
	          })
	          .catch(err => console.log(err))

	        axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/extra/'+ id)
	          .then(res => {
	          	let mData = res.data.DES;
	            this.commentsNum = mData.comments;
	            this.longCommentsNum = mData.long_comments;
	            this.shortCommentNum = mData.short_comments;
	            Indicator.close();
	          })
	          .catch(err => console.log(err)) 
	    },
	    getShortComments: function() {	    	
	    	let id = this.$route.params.id;
	    	this.shortMoreIcon = !this.shortMoreIcon;
	    	if(this.shortMoreIcon) {
	    		axios.get('https://zhihu-daily.leanapp.cn/api/v1/contents/'+ id +'/short-comments')
		          .then(res => {
		            this.shortComments = res.data.COMMENTS.comments;
		            this.commentsFlag = true;
		          })
		          .catch(err => console.log(err))
		      }else{
		      	this.shortComments = []
		      }   	
	    },
	    backspace: function (){
	    	let id = this.$route.params.id
        	this.$router.replace('/home/'+id)
	    },
	    editor: function() {
	    	Toast('开发中...')
	    },
	    // 修改图片链接
	    attachImageUrl: function (srcUrl) {
	      if (srcUrl !== undefined) {
	        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
	      }
	    },
        formatDate: function (nS) {     
	       return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");      
	    }          
	  },
	}
</script>
<style scoped>
	.appbar-fixed {
		position: fixed;
	    top: 0;
	    -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
	    transition: all .45s cubic-bezier(.23,1,.32,1);
	}
	.comments-num {
		font-size: 16px;
		margin-left: 20px;
	}
	.lang_comments_num {
	    padding: 15px 0 15px 20px;
	    border-bottom: 1px solid #eee;
	    color: #000;
	}
	.short_comments_num {
	    padding-left: 20px;
	    border-bottom: 1px solid #eee;
	    color: #000;
	    display: flex;
	    justify-content: space-between;
	}
	.short-txt {
		display: flex;
		align-items: center;
	}
	.comments_item {
		display: flex;
		flex-direction: row;
	    padding: 15px 10px;
        border-bottom: 1px solid #eee;
	}
	.item-left {
		width: 70px;
		display: flex;
		justify-content: center;
	}
	.item-left img {
		width: 55px;
	    height: 55px;
	    border-radius: 50%;
	}
	.item-right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.right-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.author {
		display: flex;
		justify-content: center;
		align-items: center;
	    font-size: 18px;
    	font-weight: bold;
	}
	.likes {
	    display: flex;
		justify-content: center;
		align-items: center;
	    color: #b9b6b6;
	}
	.likes .thumb_up {
		font-size: 12px;
	    transform: scale(.7);
    	padding: 3px;
	}
	.right-middle {
		margin: 12px 0 !important;
		font-size: 16px;
		color: #000;
	}
	.right-bottom {
		margin: 5px 0 !important;
		color: #b9b7b7;
	}
	.short-more {
	    transform: rotate(-180deg); 
	}
</style>
