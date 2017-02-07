import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'side-nav-item-active',

  routes: [
    {
      path: '/overview',
      name: 'overview',
      component: require('./app/overview/overview')
    },
    {
      path: '/icon',
      name: 'icon',
      component: require('./app/icon/icon')
    },
    {
      path: '/raisedButton',
      name: 'raisedButton',
      component: require('./app/raisedButton/raisedButton')
    },
    {
      path: '/flatButton',
      name: 'flatButton',
      component: require('./app/flatButton/flatButton')
    },
    {
      path: '/textField',
      name: 'textField',
      component: require('./app/textField/textField')
    },
    {
      path: '/datePicker',
      name: 'datePicker',
      component: require('./app/datePicker/datePicker')
    },
  ]
})

export default router;
