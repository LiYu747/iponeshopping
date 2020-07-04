<template>
 <div>
     <van-cell-group>
         <div class="flex al-center">
      <div class=" m-l2 fz-16"><van-icon name="records" /></div>   
        <div @click="Allorders" v-if="this.name===null"> <van-cell title="全部订单" class="fz-12" is-link /></div>
        <div v-else> <van-cell title="全部订单" class="fz-12" is-link  to='Allorders'/></div>
         </div>
</van-cell-group>

 <van-cell-group class=" m-t2">
         <div class="flex al-center">
      <div class=" m-l2 fz-16"><van-icon name="star-o" /></div>   
        <div @click="Allorders" v-if="this.name===null"> <van-cell title="收藏商品" class="fz-12" is-link  /></div>
         <div v-else><van-cell title="收藏商品" class="fz-12" is-link to="FavoritesList" /></div>
         </div>
</van-cell-group>

<van-cell-group>
         <div class="flex al-center">
      <div class=" m-l2 fz-16"><van-icon name="location-o" /></div>   
        <div @click="Allorders" v-if="this.name===null"> <van-cell title="地址管理" class="fz-12" is-link  /></div>
        <div v-else>  <van-cell title="地址管理" class="fz-12" is-link to="AddressManagement" /></div>
         </div>
</van-cell-group>

<van-cell-group>
         <div class="flex al-center">
      <div class=" m-l2 fz-16"><van-icon name="eye-o" /></div>   
        <div @click="Allorders" v-if="this.name===null"><van-cell title="最近浏览" class="fz-12" is-link  /></div>
        <div v-else>  <van-cell title="最近浏览" class="fz-12" is-link to="Browse" /></div>
         </div>
</van-cell-group>
 </div>
</template>

<script>
import { Dialog } from 'vant';
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         name:''
     }
   },
   methods: {
    Allorders(){
       if(this.name===null){
           Dialog.confirm({
          title: '标题',
          message: '您还没登录，去登陆吧~~~',
       })
       .then(() => {
    // on confirm
      })
       .catch(() => {
    // on cancel
  });
      }
     
    }
   },
   mounted() {
             this.name = localStorage.getItem('username')
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.van-cell{
    font-size: 13px;
    padding: 10px 5px;
}
.van-icon-arrow:before{
   margin-left: 230px;
}
</style>