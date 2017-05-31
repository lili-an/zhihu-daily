<template lang="html">
<mu-appbar title="首页" class="appbar-fixed">
<!-- <span>{{ count }}</span> -->
  <mu-icon-button icon='menu' slot="left" v-touch:tap="toggle"/>
  <mu-icon-button icon="search" slot="right"/>
  <mu-icon-button icon="more_vert" slot="right"/>
</mu-appbar>

<!-- <mu-appbar title="首页" class="appbar-fixed">
  <mu-icon-button icon="menu" slot="left" v-touch:tap="toggle"/>
  <mu-icon-button icon="search" slot="right"/>
  <mu-icon-button icon="more_vert" slot="right"/>
</mu-appbar> -->
</template>

<script type="text/javascript">

	export default {
		computed: {
		    count () {
		      return this.$store.state.count
		    }
		  },
		  methods: {
 		    toggle () {
		      this.$store.dispatch('increments').then(() => {
				  console.log(this.$store.state.count)
				})
		      this.$store.dispatch('changeFlag')
		    }
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
</style>
