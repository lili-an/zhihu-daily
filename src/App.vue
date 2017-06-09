<template>
  <div id="app">
    <m-header v-show="showHF"></m-header>
    <m-left></m-left>
    <div id="content">
      <m-loading v-show="loading"></m-loading>
      <transition name="router-fade" mode="out-in">
        <router-view class="m-view"></router-view>
      </transition> 
    </div>  
    <!-- <m-footer v-show="showHF"></m-footer> -->
  </div>
</template>

<script>
import mLoading from './components/loading'
import mHeader from './components/header'  //引入组件和注册
import mLeft from './components/navLeft'
import mFooter from './components/footer'
import './assets/sass/reset.css'  //css link方式引入会报错
import { mapState, mapGetters, mapActions } from 'Vuex' 
export default {
  computed: {
    ...mapState({
      showHF: state => state.showHF,
      loading: state => state.loading
    })
  },
  components: {
    mHeader,
    mLeft,
    mFooter,
    mLoading,
  }
}
</script>

<style lang="css">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#content {
  margin-top: 56px;
  margin-bottom: 55px;
}
.m-view {
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}

.router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}

html, body{
  height:100%;
  overflow:hidden;
  overflow-y: scroll;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  -webkit-overflow-scrolling: touch;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","WenQuanYi Micro Hei",sans-serif;
  background: #f3f3f3;
}
html::-webkit-scrollbar,
body::-webkit-scrollbar{
  width:0;
  height:0;
}
</style>
