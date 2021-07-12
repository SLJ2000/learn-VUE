import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../pages/home/home')
const mine = () => import('../pages/mine/mine')
const fenlei = () => import('../pages/fenlei/fenlei')
const cart = () => import('../pages/cart/cart')
// 避免了到当前位置的冗余导航
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/fenlei',
      name:'fenlei',
      component:fenlei
    },
    {
      path:'/mine',
      name:'mine',
      component:mine
    },
    {
      path:'/cart',
      name:'cart',
      component:cart
    },
  ],
  mode:'history'
})
