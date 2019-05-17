import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import Error from '@/components/Error'
import hww from '@/components/hww'
import zujian1 from '@/components/zujian/zujian1'
import zujian2 from '@/components/zujian/zujian2'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Error',
      component: Error
    },
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        a: hi,
        b: HelloWorld,
        c: Error
      }
    },
    {
      path: '/hi',
      name: 'hi',
      component: hi
    },
    {
      path: '/hww',
      name: 'hww',
      component: hww
    },
    {
      path: '/zujian',
      name: 'zujian',
      components: {
        a: zujian1,
        b: zujian2
      }
    }
  ]
})
