// mutations.js用于修改state中的数据状态，vuex中的mutations类似于事件，每个mutation都有一个字符串的事件类型（type）和一个回调函数（handler）。在其回调函数中接收state作为第一个参数，还可以传入额外的参数，称为载荷（payload）。
// 不能直接调用一个mutation的handler，而是应该用commit方法去触发该mutation。

// export default {
//     DISPLAY_ARTICLES (state, type) {
//         state.show = type
//         state.articles = state[type + 'Articles']
//     },
//     DISPLAY_TOPIC (state, type) {
//         state.show = type
//         state.topicArticles = state[type + 'TopicArticles']
//     },
//     SORT_CONTENT (state, type) {

//     },
//     CHANGE_LOGINWAY (state, loginway) {
//         state.loginway = loginway
//     },
//     CHANGE_ARTICLEFLAG (state, flag) {
//         state.articleFlag = flag
//     }
// }