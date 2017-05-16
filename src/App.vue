<template>
  <div id="app">
    <m-header v-show="showHF"></m-header>
    <m-left></m-left>
    <div id="content">
      <m-loading v-show="loading"></m-loading>
      <m-toast></m-toast>
      <transition name="router-fade" mode="out-in">
        <router-view class="m-view"></router-view>
      </transition> 
    </div>  
    <m-footer v-show="showHF"></m-footer>
  </div>
</template>

<script>
// import { mapState } from './store/index'
import mToast from './components/toast'
import mLoading from './components/loading'
import mHeader from './components/header'  //引入组件和注册
import mLeft from './components/navLeft'
import mFooter from './components/footer'
import './assets/sass/reset.css'  //css link方式引入会报错
export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  computed: {
    showHF() {
      return this.$store.state.showHF
    },
    loading() {
      return this.$store.state.loading
    }
  },
  components: {
    mHeader,
    mLeft,
    mFooter,
    mLoading,
    mToast,
  }
}
</script>

<style lang="css">
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
}
html::-webkit-scrollbar,
body::-webkit-scrollbar{
  width:0;
  height:0;
}
</style>
