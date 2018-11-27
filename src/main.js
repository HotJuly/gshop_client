import Vue from 'vue';
import App from './App';
import router from './router';
import AppHeader from './components/AppHeader/AppHeader.vue';

Vue.config.productionTip = false

Vue.component('AppHeader',AppHeader);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
