import Vue from 'vue'
import VueRouter from 'vue-router'
// コーヒー投稿一覧(ホーム画面)
import CoffeeHome from '../pages/CoffeeHome.vue'
import CoffeeCreate from  '../pages/CoffeeCreate.vue'
import CoffeeEdit from '../pages/CoffeeEdit.vue'
// 新規登録・ログインページ
import Signup from '../pages/Signup.vue'
import Signin from '../pages/Signin.vue'
import UserShow from '../pages/users/UserShow.vue'

Vue.use(VueRouter)

export default new VueRouter( {
  mode: 'history',
  routes: [
  { path: '/', name: 'CoffeeHome', component: CoffeeHome },
  { path: '/coffee/create', name: 'CoffeeCreate', component: CoffeeCreate },
  { path: '/coffee/:id/edit', name: 'CoffeeEdit', component: CoffeeEdit},
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/signin', name: 'Signin', component: Signin },
  { path: '/users/:id', name: 'UserShow', component: UserShow },
  ]
});