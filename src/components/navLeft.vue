<template>
<div>
    <mu-drawer :open="open" :docked="docked" @close="toggle()" class="mu-drawer-c">
      <div class="demo-menu-container">
		  <mu-paper class="demo-menu">
		    <mu-menu desktop>
		      <div v-if="usersOff == false">
		    	<mu-float-button icon="account_circle" info class="demo-float-button"/>
		      </div>
		      <div v-else>
		        <mu-float-button icon="add" secondary class="demo-float-button"/><br/>
		      </div>  	      
		      <mu-menu-item title="set" afterText="⌘"/>
		      <mu-divider />
		      <mu-menu-item title="home" rightIcon="keyboard_arrow_right"/>
		      <mu-menu-item title="customized" rightIcon="keyboard_arrow_right"/>
		      <mu-menu-item title="share" rightIcon="keyboard_arrow_right"/>
		      <mu-menu-item title="personal" rightIcon="keyboard_arrow_right"/>
		    </mu-menu>
		  </mu-paper>
		</div>
    </mu-drawer>
</div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed: {
    open () {
      return this.$store.state.open
    },
    docked () {
      return this.$store.state.docked
    },
    usersOff() {
      return this.$store.state.usersOff
    },
  },
  mounted() {
  	this.$nextTick(function() {
  		// this.getState();
  	})
  },
  methods: {
    toggle (flag) {    	
		this.$store.dispatch('changeFlag')
    },
  },
 
}
</script>
<style type="text/css">
	/*.mu-drawer-c.mu-paper.mu-drawer {
		color: #fff;
		background-color: #000;
	}
	.mu-item-title-row .mu-item-title {
		color: #fff;
	}*/
	.demo-menu {
	  display: block;
	}
	.mu-menu {
	  margin: 0 auto;
	}
</style>