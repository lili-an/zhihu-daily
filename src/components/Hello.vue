<template>
  <div class="hello">
    <mu-appbar title="图片详情" class="new-appbar">
      <mu-icon-button icon='keyboard_arrow_left' slot="left" @click="back"/>
      <mu-icon-button icon='center_focus_weak' slot="right"/>
    </mu-appbar>
    <ul class="mul">
      <li v-for="(mp,index) in mpList">
        <img :src="mp.album.picUrl">
        <p>歌名:{{ mp.name }}</p>
        <p>歌手:{{ mp.artists[0].name }}</p>
        <audio :src="mp.mp3Url" preload="auto" controls></audio>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        mpList:[]
      }
    },
    computed: {
      
    },
    mounted() {
       this.$nextTick(function() {
          this.mp3List()
          this.$store.state.showHF = false
       })
    },
    methods: {
      mp3List: function(){
        var id = this.$route.params.id
        axios.get('https://bird.ioliu.cn/netease?id='+id)
          .then(res => {
              this.mpList = res.data.songs
          }).catch(err => console.log(err))
       
      },
      back: function() {
        this.$router.replace('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 65px 0 0;
}
.new-appbar {
  position: fixed;
}
.hello {
  margin-top: -56px;
}
img {
  width: 100%;
}

</style>
