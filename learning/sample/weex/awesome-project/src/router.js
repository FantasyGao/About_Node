/* global Vue */
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import TestComp from '@/components/TestComp';

Vue.use(Router);

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/test',
      name: 'test',
      component: TestComp,
    },
  ],
});
