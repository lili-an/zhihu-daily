import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Toast } from 'mint-ui';
// import * as getters from './getters'
// import * as actions from './actions'
// import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		open: false,
     	docked: true,
     	topPopup: false,
     	loading: false,
     	showHF: true,
		count: 1,
		limit: 8,
		bottomNav: 'home',
		topPopupMsg: '',
		movieList: [],
		users:{},
		usersOff: true,
		active: false
	},
	actions: {
		//获取数据 异步
		increments (context) {
	      context.commit('increment')
	    },
	    changeActive: function(context) {
	    	context.commit('CHANGE_ACTIVE')
	    },
		loadMovieList: function({commit}) {
   				axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories')
				.then(res => {
	                // console.log(res.data.STORIES.top_stories)
	                commit('SET_MOVIE_LIST', {list: res.data.STORIES.top_stories})
	            }).catch(err => console.log(err))
		},
		changeFlag: function(context) {
			context.commit('SET_FLAG')
		},
		changeBottomPopup: function(context) {
			context.commit('SET_BottomPopup')
		},
	},
	mutations: {  //同步
		increment (state) {
	      state.count++
	    },
	    CHANGE_ACTIVE (state) {
	    	state.active = !state.active
	    	if(state.active) {
	    		Toast('夜间模式');
	    	}else {
	    		Toast('白天模式');
	    	}	    	
	    },
		SET_MOVIE_LIST: function(state, {list}) {
			state.loading = true
			setTimeout(function() {
				state.loading = false
			}, 1000)	
			state.movieList = list
		},
		SET_FLAG: function(state) {
			state.open = !state.open
			state.docked = !state.docked
		},
		SET_BottomPopup: function(state) {
			state.topPopup = true
	        if (state.topPopup) {
		        setTimeout(() => {
		          state.topPopup = false
		        }, 2000)
		      }
		}

	},
	getters: {
		doubleCount (state) {
	      return state.count * 2
	    }
	},
	modules: {

	}
})

export default store

//导出vuex的实例，其中包含state，mutations，getters，actions

// export default new Vuex.Store({
//     state,
//     mutations,
//     getters,
//     actions
// })