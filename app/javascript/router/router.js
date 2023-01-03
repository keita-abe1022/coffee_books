import Vue from 'vue'
import VueRouter from 'vue-router'
// コーヒー投稿一覧(ホーム画面)
import CoffeeHome from '../pages/CoffeeHome.vue'
import CoffeeCreate from  '../pages/CoffeeCreate.vue'
import CoffeeEdit from '../pages/CoffeeEdit.vue'


Vue.use(VueRouter)

export default new VueRouter( {
  mode: 'history',
  routes: [
  { path: '/', name: 'CoffeeHome', component: CoffeeHome },
  { path: '/create', name: 'CoffeeCreate', component: CoffeeCreate },
  { path: '/edit/:id', name: 'CoffeeEdit', component: CoffeeEdit},
  ]
});