<template lang="html">
	<div class="div-fixed">
		<mu-appbar title="新用户注册">
		  <mu-icon-button icon='keyboard_arrow_left' slot="left" @click="back"/>
		  <mu-icon-button icon='center_focus_weak' slot="right"/>
		</mu-appbar>
		<mu-text-field label="用户名" hintText="输入用户名" v-model="nameValue" :errorText="nameErrorText" type="username" labelFloat v-on:change="changeValue" ref="name"/><br/>
		<mu-text-field label="密码" hintText="输入密码" v-model="passwordValue" :errorText="passwordErrorText" type="password" labelFloat v-on:change="changeValue"/><br/>
		<mu-text-field label="确认" hintText="确认密码" v-model="confirmPasswordValue" :errorText="confirmPasswordErrorText" type="confirmPassword" labelFloat v-on:change="changeValue"/><br/><br/>
		<mu-raised-button label="注册" class="demo-raised-button" info @click="register"/><br/><br/>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				nameValue: "",
				passwordValue: "",
				confirmPasswordValue: "",
				nameErrorText: "",
				passwordErrorText: "",
				confirmPasswordErrorText: "",
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
			}
		},
		watch: {
			nameValue(v) {
				this.changeValue()
			},
			passwordValue(v) {
				this.changeValue()
			},
			confirmPasswordValue(v) {
				this.changeValue()
			}
			
		},
		methods: {
			back:function() {
				this.$router.replace('/signin')
			},
			register:function() {
				this.changeValue();
				if(this.passwordValue.trim() === this.confirmPasswordValue.trim() && this.passwordValue.trim().length >= 3 && this.nameValue.trim().length >= 4) {
					this.$store.state.users.name = this.nameValue.trim()
					this.$store.state.users.password = this.passwordValue.trim()
					localStorage.setItem('users', JSON.stringify(this.$store.state.users))
					this.$router.replace('/signin')
				}
			},
			changeValue:function() {

				this.nameValue.trim().length >= 4 ? this.nameErrorText = "" : this.nameErrorText = "用户名最少四个字符"
				this.passwordValue.trim().length >= 3 ? this.passwordErrorText = "" : this.passwordErrorText = "密码最少三个字符"
				this.confirmPasswordValue.trim() == this.passwordValue.trim() && this.confirmPasswordValue.trim().length > 0 ? this.confirmPasswordErrorText = "" : this.confirmPasswordErrorText = "密码不一致"

			}
		}
	}
</script>
<style type="text/css" scoped>
	.div-fixed {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>