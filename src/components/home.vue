<template>
<div class="gridlist-demo-container" v-touch:swipeup="swipeUp">
  <mu-grid-list>
    <!-- <mu-sub-header>图片展示</mu-sub-header> -->
	<mu-grid-tile v-for="(list,index) in limitBy(movieLists, limit)" titlePosition="bottom" actionPosition="left" :rows="1" :cols="1" :key="index" :id="index+1">
    <img :src="list.album.picUrl"/>
    <span slot="title">{{list.name}}</span>
    <span slot="subTitle">by <b>{{list.artists[0].name}}</b></span>
    <router-link :to="{ name: 'homeD', params: { id: list.id }}" class="abc"></router-link> 
    <mu-icon-button icon="star_border" slot="action"/>  
    </mu-grid-tile>
  	</mu-grid-list>
    </router-link>
  </mu-grid-list>
</div>
</template>

<script>

export default {

  data () {
    return {
    	n: 1,
    }
  },
  computed: {
  	  limit() {
        return this.$store.state.limit
      },
      movieLists() {
        return this.$store.state.movieList
      }
    },
    mounted() {
       this.$nextTick(function() {
          this.movieList()
          this.$store.state.showHF = true
          this.$store.state.bottomNav= 'home'
          // this.$store.state.loading = false
       })
    },
    methods: {
      movieList: function(){
        this.$store.dispatch('loadMovieList')
        },
	  swipeUp:function() {
		this.n+=1
		this.$store.dispatch('loadMovieList')
		this.$store.state.limit = this.n * 8
	  },

    },
}
</script>

<style>
.abc {
    display: flex;
    height: 100%;
    margin-top: -95%;
    position: relative;
    z-index: 2;
}
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.mu-grid-tile>img {
	width: 100%;
}
.gridlist-demo{
  width: 500px;
  height: 450px;
}
</style>