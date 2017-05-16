<template>
<div class="demo-grid">
  <mu-row gutter>
    <mu-col width="100" tablet="50" desktop="33" v-if="usersOff == true">
    	<mu-float-button icon="add" secondary class="demo-float-button" @click="register"/><br/>
    	<router-link to="personal">
		  	<span class="icon-span">注册／登录</span>
		</router-link>
    </mu-col>
    <mu-col width="100" tablet="50" desktop="33" v-else>
    	<mu-float-button icon="account_circle" info class="demo-float-button"/><br/>
    	<mu-flat-button label="退出登录" class="demo-flat-button" @click="logout"/>
    </mu-col>
    <mu-col width="100" tablet="50" desktop="33">
    	<mu-list>
		  <mu-list-item title="我的订单" disabled>
		  <router-link slot="right" to="/personal">
		  	<span class="icon-span">全部</span>
		    <mu-icon class="icon-span" value="keyboard_arrow_right"/>
		  </router-link>	   
		  </mu-list-item>
		</mu-list>
    </mu-col>
  </mu-row>
  <mu-row gutter>
    <mu-col width="35" tablet="25" desktop="15">
    	<mu-icon class="icon-span" value="favorite"/>
		<br/>
		<span class="icon-span">我的收藏</span>
	</mu-col>
    <mu-col width="35" tablet="25" desktop="15">
    	<mu-icon class="icon-span" value="opacity"/>
		<br/>
		<span class="icon-span">未完成作品</span>
    </mu-col>
    <mu-col width="35" tablet="25" desktop="15">
    	<mu-icon class="icon-span" value="monetization_on"/>
		<br/>
		<span class="icon-span">我的钱包</span>
    </mu-col>
    <mu-col width="35" tablet="25" desktop="15">
    	<mu-icon class="icon-span" value="dashboard"/>
		<br/>
		<span class="icon-span">收货地址</span>
	</mu-col>
    <mu-col width="35" tablet="25" desktop="15">
    	<mu-icon class="icon-span" value="message"/>
		<br/>
		<span class="icon-span">消息中心</span>
    </mu-col>
    <mu-col width="35" tablet="25" desktop="15">
    	<mu-icon class="icon-span" value="card_giftcard"/>
		<br/>
		<span class="icon-span">专属数据</span>
    </mu-col>
  </mu-row>
  <mu-row gutter>
    <mu-col width="35" tablet="25" desktop="15">
    	<mu-icon class="icon-span" value="settings"/>
		<br/>
		<span class="icon-span">设置</span>
	</mu-col>
    <mu-col width="35" tablet="25" desktop="15">
    	<mu-icon class="icon-span" value="priority_high"/>
		<br/>
		<span class="icon-span">了解我们</span>
    </mu-col>
    <mu-col width="35" tablet="25" desktop="15">
    	<mu-icon class="icon-span" value="email"/>
		<br/>
		<span class="icon-span">反馈</span>
    </mu-col>
  </mu-row>
 
</div>
</template>
<script type="text/javascript">
	export default {
	  data () {
	    return {
	    	
	    }
	  },
	  computed: {
	    topPopupMsg() {
	      return this.$store.state.topPopupMsg
	    },
	    usersOff() {
	      return this.$store.state.usersOff
	    },
	  },
	  mounted() {
       this.$nextTick(function() {
          this.$store.state.showHF = true
          this.$store.state.bottomNav= 'personal'
	       })
	    },
	  methods: {
	  	register: function() {
	  		this.$router.replace('/signin')
	  		// this.$store.state.topPopupMsg = '总得登录吧'
	  		// this.$store.dispatch('changeBottomPopup')
	  	},
	  	logout: function() {
		  	this.$router.replace('/')
		  	this.$store.state.bottomNav = "home"
		  	this.$store.state.usersOff = true
		  }
	  },
	}
</script>

<style lang="css">
.demo-grid div[class*="col-"] {
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 8px;
}
.mu-item-title-row .mu-item-title {
	flex: inherit;
}
.mu-item .mu-item-left, .mu-item .mu-item-right {
	width: inherit;
}
.icon-span {
	color: #000;
	vertical-align: -webkit-baseline-middle;
}
</style>