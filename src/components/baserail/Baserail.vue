<template>
 <div>
<van-tabbar route>
   <van-tabbar-item icon="wap-home-o" replace to='/'>商城</van-tabbar-item>
  <van-tabbar-item icon="wap-nav" dot  to='/Classification'>  分类</van-tabbar-item>
  <van-tabbar-item v-if="cartNum===0||username===null" icon="shopping-cart"  to='/ShoppingCart'>购物车</van-tabbar-item>
  <van-tabbar-item v-if="cartNum>0&&username!==null" icon="shopping-cart" :badge='cartNum' to='/ShoppingCart'>购物车</van-tabbar-item> 
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
   username:''
     }
   },
   methods: {
    //  获取数量
   getData() {
      //获取购物车数据
      this.$api
        .GetCard()
        .then(res => {
          this.$store.commit("setCartNum", res.shopList.length);
          this.shoplist = res.shopList;
          // console.log(this.shoplist);
        })
        .catch(err => {
          console.log(err);
        });
    },
   },
   mounted() {
     //  获取数量
     this.getData()
     this.username = localStorage.getItem('username')
   },
   watch: {

   },
   computed: {
     //  获取数量
        cartNum(){
      return this.$store.state.cartNum
    }  
   }
 }
</script>

<style scoped lang='scss'>
.van-tabbar-item--active{
    color: red;
}
</style>