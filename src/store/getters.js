// getters.js用来获取state中的数据，可以认为是store中的计算属性，每个方法都会接收一个state对象作为参数

// export const getShow = state => state.show
// export const getArticles = state => state.articles

import * as state from './state'

const getters = {
	showHF: state => state.showHF,
	loading: state => state.loading
}

// export const showHF = state => state.showHF
// export const loading = state => state.loading

console.log(state.showHF)