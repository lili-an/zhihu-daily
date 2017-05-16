<template>
<mu-paper>
  <mu-bottom-nav :value="bottomNav" @change="handleChange" class="mfooter">
    <mu-bottom-nav-item value="home" title="首页" icon="home"/>
    <mu-bottom-nav-item value="customized" title="定制" icon="toys"/>
    <mu-bottom-nav-item value="share" title="圈子" icon="camera"/>
    <mu-bottom-nav-item value="personal" title="个人中心" icon="person"/>
  </mu-bottom-nav>
</mu-paper>
</template>

<script>
export default {
  data () {
    return {
      // bottomNav: 'home'
    }
  },
  mounted() {

  },
  computed: {
    bottomNav() {
      return this.$store.state.bottomNav
    }
  },
  methods: {
    handleChange (val) {
      this.$store.state.bottomNav = val

      if(this.bottomNav == 'home') {
         this.$router.replace('/');
      }
      if(this.bottomNav == 'customized') {
         this.$router.replace('/customized');
      }
      if(this.bottomNav == 'share') {
         this.$router.replace('/share');
      }
      if(this.bottomNav == 'personal') {
         this.$router.replace('/personal');
      }
    },
  }
}
</script>

<style type="text/css" scoped>
  .mfooter {
    position: fixed;
    bottom: 0;
    z-index: 3;
  }
</style>