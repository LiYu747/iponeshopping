<template>
 <div>
<van-tabbar route>
  <van-tabbar-item icon="wap-home-o" replace to='/'>商城</van-tabbar-item>
  <van-tabbar-item icon="wap-nav" dot  to='/Classification'>  分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart" badge="5" to='/ShoppingCart'>购物车</van-tabbar-item>
  <van-tabbar-item icon="contact" replace to='/UserInformation'>我的</van-tabbar-item>
</van-tabbar>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
   active: '',
     }
   },
   methods: {
   
   },
   mounted() {
     
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.van-tabbar-item--active{
    color: red;
}
</style>