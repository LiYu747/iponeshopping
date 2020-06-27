<template>
 <div>
   <div>热销商品</div>
        <div class=" flex b-box">
<div v-for="item in hotsale.hotGoods" :key="item.id">
  
           <div class="box flex-d al-center">
        <!-- 商品图片 -->
         <div>
             <img :src="item.image" alt="" class="img">
         </div>
         <!-- 商品名称 -->
         <div class="text">
             {{item.name}}
         </div>
         <!-- 价格 -->
         <div class="flex">
             <div>￥{{item.price}}</div>
             <div>￥{{item.mallPrice}}</div>
         </div>
           </div>
       </div>
   </div>
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
      hotsale(){
          return this.$store.state.Alltxt;
      }
   }
 }
</script>

<style scoped lang='scss'>
.img{
    width: 100px;
    height: 90px;
}
.text{
    width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.b-box{
    flex-wrap: wrap;
}
.box{
    width: 185px;
    height: 150px;
    border: 0.5px solid rgb(241,241,241);
   
}
</style>