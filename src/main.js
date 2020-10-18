import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  // from "Hypertext" - HTML structure generating script
  // render: function(createElement) {
  // return createElement(App)
  // }
  render: h => h(App)
}).$mount('#app')
