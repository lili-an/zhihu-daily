<template lang="html">
	<div class="signin">
		<mu-appbar title="登录">
	      <mu-icon-button icon='keyboard_arrow_left' slot="left" @click="back"/>
	      <!-- <mu-icon-button icon='center_focus_weak' slot="right"/> -->
	      <router-link to="/register" class="link-register">注册</router-link>
	    </mu-appbar></br> 
		<!-- <router-link to="/register" class="link-register">注册</router-link></br> -->
		<!-- <mu-avatar :src="breakfast" slot="avatar" :size="100"/></br> -->
		<!-- <mu-avatar slot="avatar" :size="100" color="deepOrange300" backgroundColor="purple500"/>logo</mu-avatar></br> -->
		<mu-avatar slot="left" :size="100" color="deepOrange300" backgroundColor="purple500">CM</mu-avatar></br></br>
		<mu-text-field label="用户名" hintText="请输入用户名" v-model="nameValue" :errorText="nameErrorText" type="username" labelFloat v-on:change="changeValue"/><br/>
		<mu-text-field label="密码" hintText="请输入密码" v-model="passwordValue" :errorText="passwordErrorText" type="password" labelFloat v-on:change="changeValue"/><br/><br/>
		<mu-raised-button label="登录" class="demo-raised-button" secondary @click="signin"/><br/><br/>
		<mu-flat-button label="忘记密码?" class="demo-flat-button"/><br/>
		<span>v4.3.4</span>
	</div>
</template>
<script type="text/javascript">
	import breakfast from '../assets/img/breakfast.jpg'
	export default {
		data() {
			return {
				breakfast,
				nameValue: "",
				passwordValue: "",
				nameErrorText: "",
				passwordErrorText: "",
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.$store.state.showHF = false
			})
		},
		computed: {
			users() {
				return this.$store.state.users
			},
		},
		watch: {
			nameValue(v) {
				this.changeValue()
			},
			passwordValue(v) {
				this.changeValue()
			},
			
		},
		methods: {
			signin:function() {

				this.changeValue()
				var localUsers = JSON.parse(localStorage.getItem('users'))

				if(this.nameValue === localUsers.name && this.passwordValue === localUsers.password) {
					this.$store.state.topPopupMsg = '登录成功'
	  				this.$store.dispatch('changeBottomPopup')
	  				this.$store.state.usersOff = false
	  				this.$store.state.bottomNav = "home"
	  				this.$router.replace('/')
				} else {
					this.$store.state.topPopupMsg = '登录失败'
	  				this.$store.dispatch('changeBottomPopup')
				}
			},
			changeValue:function() {

				this.nameValue.trim().length >= 4 ? this.nameErrorText = "" : this.nameErrorText = "用户名最少四个字符"
				this.passwordValue.trim().length >= 3 ? this.passwordErrorText = "" : this.passwordErrorText = "密码最少三个字符"

			},
			back: function() {
				this.$router.replace('/')
				this.$store.state.bottomNav = "home"
			}
		}
	}
</script>
<style type="text/css" scoped>
	.signin {
		margin-top: -56px;
	}
	.demo-paper {
	  display: inline-block;
	  height: 100px;
	  width: 100px;
	  margin: 20px;
	  text-align: center;
	}
	.link-register {
		display: block;
		color: #000;
	    font-size: 18px;
	    padding-right: 10px;
	    padding-top: 10px;
	    text-align: right;
	    min-height: 45px;
	    width: 100%;
	}
	/*#content {
   		 margin-top: 0px;
	}*/
</style>