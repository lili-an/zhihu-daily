import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
		usersOff: true
	},
	actions: {
		//获取数据 异步
		increments (context) {
	      context.commit('increment')
	    },
		loadMovieList: function({commit}) {
			//621793299  565103184
			axios.get('https://bird.ioliu.cn/netease?playlist_id=621793299')
			.then(res => {
                commit('SET_MOVIE_LIST', {list: res.data.result.tracks})
                // state.loading = false
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

// store.commit('increment')

// console.log(store.state.count)