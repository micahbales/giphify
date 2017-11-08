// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import BootstrapSass from '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';

Vue.use(VueResource);
Vue.use(BootstrapSass);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, VueResource },
});
