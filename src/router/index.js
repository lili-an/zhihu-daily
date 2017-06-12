import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import customized from '@/components/customized'
import personal from '@/components/personal'
import signin from '@/components/signIn'
import register from '@/components/register'
import newsDetail from '@/components/newsDetail'
import comments from '@/components/comments'
import othersDetails from '@/components/othersDetails'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: window.location.href,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/home/:id',
      name: 'homeD',
      component: newsDetail,
    },
    {
      path: '/comments/:id',
      name: 'comments',
      component: comments,
    },
    {
      path: '/othersDetails/:id',
      name: 'othersDetails',
      component: othersDetails,
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/customized',
      name: 'customized',
      component: customized
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
   { path: '*', redirect: '/home' }
  ]
})
