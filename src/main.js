import Vue from 'vue'
import App from './App.vue'
// 변수이기 때문에 대괄호 {} 사용
import {store} from './store/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
