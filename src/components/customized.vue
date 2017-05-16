<template lang="html">
	<mu-list>
	    <mu-sub-header>定制详情</mu-sub-header>
	    <mu-list-item title="个人定制" @click="customizedHandle">
	      <mu-icon value="airline_seat_flat" slot="left"/>
	      <mu-icon value="navigate_next" slot="right"/>
	    </mu-list-item>
	    <mu-divider/>
	    <mu-list-item title="其它定制" @click="otherCus($event)">
	      <mu-icon value="airline_seat_flat_angled" slot="left"/>
	      <mu-icon value="navigate_next" slot="right"/>
	    </mu-list-item>
	    <mu-divider/>
	    <mu-list-item title="其它定制" @click="otherCus($event)">
	      <mu-icon value="airline_seat_individual_suite" slot="left"/>
	      <mu-icon value="navigate_next" slot="right"/>
	    </mu-list-item>
	     <mu-divider/>
	    <mu-list-item title="其它定制" @click="otherCus($event)">
	      <mu-icon value="airline_seat_recline_extra" slot="left"/>
	      <mu-icon value="navigate_next" slot="right"/>
	    </mu-list-item>
	     <mu-divider/>
	    <mu-list-item title="其它定制" @click="otherCus($event)">
	      <mu-icon value="airline_seat_recline_normal" slot="left"/>
	      <mu-icon value="navigate_next" slot="right"/>
	    </mu-list-item>
	     <mu-divider/>
	  </mu-list>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
	       this.$nextTick(function() {
	          this.$store.state.showHF = true
	          this.$store.state.bottomNav= 'customized'
	       })
	    },
	    methods: {
	    	customizedHandle: function() {
	    		this.$router.replace('customized/detail')
	    	},
	    	otherCus: function(event) {
	    		this.$store.state.topPopupMsg = '没有数据'
	  			this.$store.dispatch('changeBottomPopup')
	    	}
	    }
	}
</script>
<style type="text/css" scoped>
	
</style>