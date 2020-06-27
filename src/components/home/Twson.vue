<template>
 <div>
     <div class="move">
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(item, index) in rotation" :key="index">
      <img v-lazy="item.image" @click="add(item)"  class="img"/>
  </van-swipe-item>
</van-swipe>

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
      add(item){
         this.$router.push({path:'/details',query:{id:item.goodsId}})
      }
   },
   mounted() {

   },
   watch: {

   },
   computed: {
 rotation(){
      return this.$store.state.rotation
    }
   }
 }
</script>

<style scoped lang='scss'>
.img{
    width: 100%;
    height: 170px;
}
.move{
    margin-top: 40px;
}
</style>