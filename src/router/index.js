import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import customized from '@/components/customized'
import share from '@/components/share'
import personal from '@/components/personal'
import signin from '@/components/signIn'
import register from '@/components/register'
import hello from '@/components/Hello'
import detail from '@/components/detail'

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
      component: hello,
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
      path: '/customized/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
   { path: '*', redirect: '/home' }
  ]
})
