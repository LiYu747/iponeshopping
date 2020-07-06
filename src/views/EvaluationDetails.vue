<template>
 <div>
     <!-- 评论详情 -->
        <div class="van-hairline--bottom">
       <div class=" flex ju-center pad pos-rel">
     <div @click="rueter"  class="lft pos-abs"> <van-icon name="arrow-left"  color="rgb(101,152,250)"/> </div>    
   <div>评价详情</div> 
       </div>
     </div>
     <div class=" flex al-center m-t2 m-l2 fz-14">
<van-rate v-model="all.rate" />
   <div class=" m-l3">{{all.comment_time}}</div>
     </div>
   <div class="box-b">
     <div class=" m-l1 m-t1">{{all.content}}</div> 
   </div>
    
    <div>
        <div v-for="item in all.goods" :key="item.id" class=" flex al-center fz-14 pos-rel">
               <div><img :src="item.image_path" alt="" class="img"></div>
               <div>{{item.name}}</div>
               <div @click="gotosppimg" class="box flex al-center ju-center pos-abs"><van-icon name="shopping-cart" /></div>
        </div>
    </div>
   <div class=" flex ju-center">
 <van-button class="btn"  @click="rueter" type="primary">返回</van-button>
   </div>
   
 </div>
</template>

<script>
import { Toast } from 'vant';
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        //  全部数据
        all:[],
       
     }
   },
   methods: {
     gotosppimg(){
        this.$api.AddToCart(this.all.cid)
       .then(res=>{
         console.log(res);
         Toast.success(res.msg)
    
       })
       .catch(err=>{

       })
     },
     rueter(){
         this.$router.go(-1)
     }
   },
   mounted() {
       this.all= this.$route.query.all
   console.log(this.$route.query.all);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.pad{
  padding: 10px 0;
}
.lft{
  left: 20px;
}
.box-b{
    margin-top: 20px;
    width: 100%;
    height: 300px;
}
.img{
    width: 70px;
    height: 70px;
}
.box{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: yellowgreen;
    right: 30px;
}
.btn{
    width: 90%;
    margin-top: 30px;
}
</style>