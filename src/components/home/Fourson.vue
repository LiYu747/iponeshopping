<template>
 <div>
     <!-- 商品推荐 -->
     <div class=" m-l2 m-t1">商品推荐</div>
     <div class="big-box flex" ref="transverse">
 <div class="flex soml-box ju-center">
     <div v-for="item in Alltxt.recommend" :key="item.id">
         <div class="kuang m-t1">
    <img :src="item.image" alt="" class="img">
         <div class="name fz-14">{{item.goodsName}}</div>
         <div class="flex al-center fz-14">
  <div>￥{{item.mallPrice}}</div>
         <div class=" fz-12">￥{{item.price}}</div>
         </div>
         <!-- 查看详情 -->
         <div class=" flex">
             <div class="shoppingcar flex al-center ju-center"><van-icon name="shopping-cart" color="#fff" /></div> 
             <div class="seex flex al-center ju-center fz-12 bai" @click="goto(item)">
                 查看详情
             </div>
         </div>
         </div>
     </div>
</div>
     </div>
    
 </div>
</template>

<script>
import BScroll from "better-scroll";
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
   this.$router.push({path:'/details',query:{id:item.goodsId}})
   }
   },
   mounted() {
       new BScroll(this.$refs.transverse,{
            scrollX: true, 
            click: true,
        })
   },
   watch: {

   },
   computed: {
  Alltxt() {
      return this.$store.state.Alltxt;
    },
   }
 }
</script>

<style scoped lang='scss'>
.img{
    width: 140px;
    height: 120px;
}
.name{
    font-size: 15px;
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.shoppingcar{
    width: 30px;
    height: 26px;
    background: #FECA3A;
    border-radius: 5PX 0 0 5px;
}
.seex{
     width: 80px;
    height: 26px;
    background: red;
}
.kuang{
    border-top: 1px solid rgb(241,241,241);
    border-right: 1px solid rgb(241,241,241);
    border-bottom:1px solid rgb(241,241,241);
    height: 200px;
   align-items: center;
}
.big-box{
    overflow: hidden;
}
.soml-box{
    flex: 1;
}
</style>