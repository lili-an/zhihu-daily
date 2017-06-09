import * as types from './types'
import { Toast } from 'mint-ui';

const mutations = {
	[types.INCREMENT](state) {
      state.count++
    },
    [types.CHANGE_ACTIVE](state) {
    	state.active = !state.active
    	if(state.active) {
    		Toast('夜间模式');
    	}else {
    		Toast('白天模式');
    	}	    	
    },
	[types.SET_MOVIE_LIST] (state, {list}) {
		state.loading = true
		setTimeout(function() {
			state.loading = false
		}, 1000)	
		state.movieList = list
	},
	[types.SET_FLAG] (state) {
		state.open = !state.open
		state.docked = !state.docked
	},
	[types.SET_BottomPopup] (state) {
		state.topPopup = true
        if (state.topPopup) {
	        setTimeout(() => {
	          state.topPopup = false
	        }, 2000)
	      }
	}
}