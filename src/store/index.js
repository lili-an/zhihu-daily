import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Toast } from 'mint-ui'
// import * as state from './state'
// import * as getters from './getters'
// import * as actions from './actions'
// import mutations from './mutations'

Vue.use(Vuex)

const INCREMENT = "INCREMENT"
const CHANGE_ACTIVE = "CHANGE_ACTIVE"
const LOAD_LATEST_NEWS = "LOAD_LATEST_NEWS"
const SET_FLAG = "SET_FLAG"
const SET_BottomPopup = "SET_BottomPopup"

const state = {
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
}

const mutations = {
	[INCREMENT](state) {
      state.count++
    },
    [CHANGE_ACTIVE](state) {
    	state.active = !state.active
    	if(state.active) {
    		Toast('夜间模式');
    	}else {
    		Toast('白天模式');
    	}	    	
    },
	[LOAD_LATEST_NEWS] (state, {list}) {
		state.loading = true
		setTimeout(function() {
			state.loading = false
		}, 1000)	
		state.movieList = list
	},
	[SET_FLAG] (state) {
		state.open = !state.open
		state.docked = !state.docked
	},
	[SET_BottomPopup] (state) {
		state.topPopup = true
        if (state.topPopup) {
	        setTimeout(() => {
	          state.topPopup = false
	        }, 2000)
	      }
	}
}

const actions = {
	increment: function(context) {
      context.commit('INCREMENT')
    },
    changeActive: function(context) {
    	context.commit('CHANGE_ACTIVE')
    },
	loadLatestNews: function({commit}) {
				axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories')
			.then(res => {
                // console.log(res.data.STORIES.top_stories)
                commit('LOAD_LATEST_NEWS', {list: res.data.STORIES.top_stories})
            }).catch(err => console.log(err))
	},
	changeFlag: function(context) {
		context.commit('SET_FLAG')
	},
	changeBottomPopup: function(context) {
		context.commit('SET_BottomPopup')
	},
}

const getters = {
	// showHF: state => state.showHF,
	// loading: state => state.loading
}
//导出vuex的实例，其中包含state，mutations，getters，actions

export default new Vuex.Store({  
    state,  
    mutations,  
    actions,  
    getters,  
})  
