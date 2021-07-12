<template>
  <div id="app">
    <tabbar name="123">
      <!-- slot插槽可以放多个标签 -->
      <TabbarItem @click="getval" :select="sel" path="home">
        <img slot="item-icon" src="./assets/img/首页.png" alt="">
          <p slot="item-text">首页</p>
          <img slot="item-icon-active" src="./assets/img/首页red.png" alt="">
      </TabbarItem>
      <TabbarItem @click="getval" :select="sel" path="fenlei">
        <img slot="item-icon" src="./assets/img/分类.png" alt="">
          <p slot="item-text">分类</p>
          <img slot="item-icon-active" src="./assets/img/分类red.png" alt="">
      </TabbarItem>
      <TabbarItem @click="getval" :select="sel" path="cart">
        <img slot="item-icon" src="./assets/img/购物车.png" alt="">
          <p slot="item-text">购物车</p>
          <img slot="item-icon-active" src="./assets/img/购物车red.png" alt="">
      </TabbarItem>
      <TabbarItem @click="getval" :select="sel" path="mine">
        <img slot="item-icon" src="./assets/img/我的.png" alt="">
          <p slot="item-text">我的</p>
          <img slot="item-icon-active" src="./assets/img/我的red.png" alt="">
      </TabbarItem>
    </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar.vue'
import TabbarItem from './components/tabbar/TabbarItem.vue'
export default {
  name: 'App',
  components:{
    tabbar,
    TabbarItem
  },
  data(){
    return {
      sel:'home'
    }
  },
  methods:{
    getval:function(res){
      console.log(res)
      this.sel = res
    }
  }
}
</script>

<style>
@import "./css/base.css";

</style>
