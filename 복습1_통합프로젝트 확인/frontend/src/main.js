import Vue from 'vue'
import App from './App.vue'
import router from './router'

// axios 모듈을 설치하고 사용
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
