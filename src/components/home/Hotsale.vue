<template>
 <div>
   <div class=" m-l2 m-t1 red">热销商品</div>
        <div class="m-t1 flex b-box fz-14">
<div v-for="item in hotsale.hotGoods" @click="goto(item)" :key="item.id">
  
           <div class="box flex-d al-center">
        <!-- 商品图片 -->
         <div>
             <img :src="item.image" alt="" class="img">
         </div>
         <!-- 商品名称 -->
         <div class="text red">
             {{item.name}}
         </div>
         <!-- 价格 -->
         <div class="flex">
             <div class="red">￥{{item.price}}</div>
             <s>￥{{item.mallPrice}}</s>
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
        goto(item){
    this.$router.push({path:'/Details',query:{id:item.goodsId}})
        }
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
    margin-bottom: 30px;
}
.box{
    width: 185px;
    height: 150px;
    border: 0.5px solid rgb(241,241,241);
   
}
</style>