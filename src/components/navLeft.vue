<template>
<div>
    <mu-drawer :open="open" :docked="docked" @close="toggle()" class="mu-drawer-c">
      <div class="demo-menu-container">
		  <mu-paper class="demo-menu">
		    <mu-menu desktop>
		      <div v-if="usersOff == false">
		    	登录成功
		      </div>
		      <div v-else>
		        <div class="nav-left-top">
		    		<div class="avater">
		    			<!-- <img src="" alt=""> -->
		    			<mu-icon-button icon="face" slot="left"/>
		    			<div>请登录</div>		    			
		    		</div>
		    		<div class="_second">
		    			<div class="_second-item" @click="collectionList">
		    				<mu-icon-button icon="star" slot="left"/>
		      				<div class="_my">我的收藏</div>
		    			</div>
		    			<div class="_second-item">
		    				<mu-icon-button icon="file_download" slot="left"/>
		      				<div class="_my">离线下载</div>
		    			</div>
		    		</div>
		    	</div>
		      </div>  	      
		      <div class="nav-left-home" @click="routrHome">
		      	<mu-icon-button icon="home" slot="left"/>
		      	<div class="_txt" slot="left">首页</div>
		      </div>
		      <!-- <mu-divider /> -->
		      <!-- <mu-menu-item title="home" rightIcon="keyboard_arrow_right"/> -->
		      <mu-menu-item :title="themesItem.name" rightIcon="add" v-for="(themesItem,index) in themesList" :key="themesItem.id" class="themes-item" @click="getOthers(themesItem.id)"/>
		    </mu-menu>
		  </mu-paper>
		</div>
    </mu-drawer>
</div>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters, mapActions } from "vuex";  
export default {
	  data () {
	    return {
	    	themesList: []
	    }
	  },
	  computed: {
	  	...mapState({
	  		open: state => state.open,
	  		docked: state => state.docked,
	  		usersOff: state => state.usersOff,
	  	})
	  },
	  mounted() {
	  	this.$nextTick(function() {
	  		this.getThemesList();
	  	})
	  },
	  methods: {
	  	...mapActions({
	  		toggle: 'changeFlag',
	  	}),
	    getThemesList: function (){
	        axios.get('https://zhihu-daily.leanapp.cn/api/v1/themes')
	          .then(res => {
	            this.themesList = res.data.THEMES.others;
	          })
	          .catch(err => console.log(err))

	    },
	    collectionList: function() {
	    	
	    },
	    getOthers: function (id) {
	    	// if(this.$route.params.id !== id) {
	     //      	 window.location.reload();
	     //      }  
            this.$router.replace('/othersDetails/'+id)  	
	    	this.$store.dispatch('changeFlag')
	    },
	    routrHome: function() {
	    	this.$router.replace('/')
	    	this.$store.dispatch('changeFlag')
	    }
	  },
 
}
</script>
<style type="text/css">
	.mu-menu-destop .mu-menu-item {
	    padding: 0 15px !important;
	}
	.mu-menu-destop {
		padding: 0 !important;
	}
	.demo-menu {
	  display: block;
	}
	.mu-menu {
	  margin: 0 auto;
	}
	.nav-left-top {
		display: flex;
		flex-direction: column;
		background: #03a9f4;
	}
	.avater {
		display: flex;
		flex-direction: row;
		color: #fff;
		align-items: center;
	}
	._second {
		display: flex;
		flex-direction: row;
	}
	._second-item {
		flex: 1;
		display: flex;
		color: #fff;
	}
	.nav-left-home {
		display: flex;
		background: #eee;
		color: #03a9f4;
	}
	._my {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	._txt {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
	}
	.themes-item {
		padding: 10px 0;
		color: #000;
	}
</style>