import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // from "Hypertext" - HTML structure generating script
  // render: function(createElement) {
    // return createElement(App)
  // }
}).$mount('#app')
