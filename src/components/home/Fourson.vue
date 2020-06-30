<template>
 <div>
     <!-- 商品推荐 -->
     <div class=" m-l2 m-t1">商品推荐</div>
     <div class="big-box flex" ref="transverse">
 <div class="flex soml-box ju-center">
     <div v-for="(item,index) in Alltxt.recommend" :key="index">
         <div class="kuang m-t1">
    <img :src="item.image" alt="" class="img">
         <div class="name fz-14">{{item.goodsName}}</div>
         <div class="flex al-center fz-14">
  <div>￥{{item.mallPrice}}</div>
         <div class=" fz-12">￥{{item.price}}</div>
         </div>
         <!-- 查看详情 -->
         <div class=" flex">
             <div class="shoppingcar flex al-center ju-center" @click="gotocat(item)"><van-icon name="shopping-cart-o"  color="#fff" /></div> 
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
import { Toast } from 'vant';
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
   },
  gotocat(item){
       this.$api.AddToCart(item.goodsId)
       .then(res=>{
           // findindex 返回他的下标，如果没有就返回-1
           //  获取数量
            let index = this.shopList.findIndex(item1 => {
              return item1.cid === item.goodsId
            })
            if (index === -1) this.$store.commit('addCartNum')
           console.log(res.msg)
         Toast.success(res.msg)
    
       })
       .catch(err=>{

       })
    },
   },
   mounted() {
       new BScroll(this.$refs.transverse,{
            scrollX: true, 
        })
   },
   watch: {

   },
   computed: {
  Alltxt() {
      return this.$store.state.Alltxt;
    },
    //  获取数量
    shopList(){
      return this.$store.state.shopList
    }
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