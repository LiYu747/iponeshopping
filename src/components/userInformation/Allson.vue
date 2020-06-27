<template>
 <div>
     <van-cell-group>
         <div class="flex al-center">
      <div class=" m-l2 fz-16"><van-icon name="records" /></div>   
         <van-cell title="全部订单" class="fz-12" is-link to="index" />
         </div>
</van-cell-group>

 <van-cell-group class=" m-t2">
         <div class="flex al-center">
      <div class=" m-l2 fz-16"><van-icon name="star-o" /></div>   
         <van-cell title="收藏商品" class="fz-12" is-link to="index" />
         </div>
</van-cell-group>

<van-cell-group>
         <div class="flex al-center">
      <div class=" m-l2 fz-16"><van-icon name="location-o" /></div>   
         <van-cell title="地址管理" class="fz-12" is-link to="index" />
         </div>
</van-cell-group>

<van-cell-group>
         <div class="flex al-center">
      <div class=" m-l2 fz-16"><van-icon name="eye-o" /></div>   
         <van-cell title="最近浏览" class="fz-12" is-link to="index" />
         </div>
</van-cell-group>
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
.van-cell{
    font-size: 13px;
    padding: 10px 5px;
}
</style>