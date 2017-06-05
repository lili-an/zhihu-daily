// Action提交的是mutation，而不是直接更改数据状态，而且在Action中可以包含任意的异步操作。Action函数接收一个与store实例具有相同方法和属性的context对象，因此可以调用context.commit提交mutation，或者通过context.getters，context.state来获取store的getters和state。
// Action通过store.dispatch方法触发，由于mutation必须同步执行的限制，所以如果需要执行异步操作用Action将会非常方便

// export const displayArticles = ({commit},type)=> {
//     commit('DISPLAY_ARTICLES', type)
// }

// export const displayTopic = ({commit},type)=> {
//     commit('DISPLAY_TOPIC', type)
// }

// export const sortContent = ({commit},type)=> {
//     commit('SORT_CONTENT', type)
// }

// export const changeLoginway = ({commit}, loginway)=> {
//     commit('CHANGE_LOGINWAY', loginway)
// }

// export const changeArticleFlag = ({commit}, flag)=> {
//     commit('CHANGE_ARTICLEFLAG', flag)
// }