import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import Error from '@/components/Error'

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
        main: HelloWorld,
        bottom: hi
      }
    },
    {
      path: '/hi',
      name: 'hi',
      component: hi
    }
  ]
})
