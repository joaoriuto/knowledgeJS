import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO!!!

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikpvw6NvIFBlZHJvIE0gUml1dG8iLCJlbWFpbCI6ImpwbWNyQGVtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MDU4MTI4NTUsImV4cCI6MTYwNjA3MjA1NX0.AI3Q_6luHvh0Y_v6qhLw7v8Fo0liy8hkISdFjBCPS9g'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')