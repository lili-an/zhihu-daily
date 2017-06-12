<template lang="html">
	<mu-appbar class="appbar-fixed" :class="{ 'nightColor': active }">
	  <mu-icon-button icon='menu' slot="left" v-touch:tap="toggle"/>
	  <div class="_title" slot="left">首页</div>
	  <mu-icon-button icon="notifications" slot="right"/>
	  <mu-icon-button icon="more_vert" slot="right" @click="setNightColor"/>
	</mu-appbar>
</template>

<script type="text/javascript">
import { mapState, mapGetters, mapActions } from "vuex";  

	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapState({
		      active: state => state.active,
		    })
		  },
		  methods: {
		  	...mapActions({   
                toggle: 'changeFlag',  
                setNightColor: 'changeActive',  
            }) 
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
	._title {
		margin-left: 15px;
		font-size: 18px;
	}
	.nightColor {
		background: #000;
	}
</style>
