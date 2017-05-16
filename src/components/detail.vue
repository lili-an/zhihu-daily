<template lang="html">
<transition name="router-fade" mode="out-in">
	<div>
	 <mu-float-button icon="visibility" class="demo-float-button" @click="changeJoke" /></br>
	 <i> 没有定制，看看笑话吧。点击按钮试试 </i>
    <div class="joke-bg" v-for="(text,index) in texts">
	 	<p>{{ index+1 }}, {{ text.content }}</p>
	 </div>    
	</div>
</transition> 
</template>

<script type="text/javascript">
import axios from 'axios'
	export default {
		data() {
			return {
				texts: []
			}
		},
		mounted() {
			// this.$nextTick(function() {
			// 	this.changeJoke()
			// })
		},
		methods: {
			changeJoke: function() {
				this.texts = []
				axios.get('https://bird.ioliu.cn/joke/rand?type=text').then(res=>{
					this.texts = res.data.data
				}).catch(err => console.log(err))
			}
		}
	}
</script>

<style type="text/css" scoped>
	.router-fade-enter-active, .router-fade-leave-active {
	      transition: opacity .3s;
	  }
	.router-fade-enter, .router-fade-leave-active {
	    opacity: 0;
	}
	.joke-bg {
		    min-height: 50px;
		    padding: 15px;
		    border-bottom: 1px solid #ccc;
	}
	p {
		text-align: left;
	}
	.demo-float-button {
		position: fixed;
		top: 45%;
		right: 0;
	}
</style>