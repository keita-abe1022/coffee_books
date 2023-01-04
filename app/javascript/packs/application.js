// require("@rails/ujs").start()
// require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")

import Vue from 'vue'
import App from './App.vue'
import router from '../router/router.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
const vuetify = new Vuetify();

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    vuetify,
    icons: {
      iconfont: 'mdi',
    },
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})