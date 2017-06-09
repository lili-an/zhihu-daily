// Action提交的是mutation，而不是直接更改数据状态，而且在Action中可以包含任意的异步操作。Action函数接收一个与store实例具有相同方法和属性的context对象，因此可以调用context.commit提交mutation，或者通过context.getters，context.state来获取store的getters和state。
// Action通过store.dispatch方法触发，由于mutation必须同步执行的限制，所以如果需要执行异步操作用Action将会非常方便

import * as types from './types'

const actions = {
	increment: function(context) {
      context.commit('types.INCREMENT')
    },
    changeActive: function(context) {
    	context.commit('types.CHANGE_ACTIVE')
    },
	loadMovieList: function({commit}) {
				axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories')
			.then(res => {
                // console.log(res.data.STORIES.top_stories)
                commit('types.SET_MOVIE_LIST', {list: res.data.STORIES.top_stories})
            }).catch(err => console.log(err))
	},
	changeFlag: function(context) {
		context.commit('types.SET_FLAG')
	},
	changeBottomPopup: function(context) {
		context.commit('types.SET_BottomPopup')
	},
}