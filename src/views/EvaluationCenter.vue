<template>
 <div class="FSSDS-DJKA-A">
       <div class="van-hairline--bottom">
       <div class=" flex ju-center pad pos-rel">
     <div class="lft pos-abs"> <van-icon name="arrow-left" @click="rete"  color="rgb(101,152,250)"/> </div>    
   <div>评价中心</div> 
       </div>
     </div>
     <div><img src="../img/evaluate.jpg" alt="" class="img"></div>
     <van-tabs v-model="active">
  <van-tab title="待评价">
    <div v-for="item in arr" :key="item.id">
      <div class="van-hairline--bottom flex fz-14 pos-rel">
        <div><img :src="item.image_path" alt="" class="img1"></div>
      <div class="text">{{item.name}}</div>
      <div class="vox pos-abs flex al-center fz-14 ju-center" @click="goto(item)">
    <van-icon name="chat" />
        <div class=" m-l1">评论晒单</div>  
      </div>
      </div>
           
    </div>
  </van-tab>
  <van-tab title="已评价">
    <div v-for="item in msg" :key="item.id">
      <div v-for="item1 in item.goods" :key="item1.id">
      <div class="van-hairline--bottom flex fz-14 pos-rel">
        <div><img :src="item1.image_path" alt="" class="img1"></div>
      <div class="text">{{item1.name}}</div>
      <div class="vox1 pos-abs flex al-center fz-14 ju-center" @click="go(item)">
        <div>查看评价</div>  
      </div>
      </div>
          </div> 
    </div>
  </van-tab>
 
</van-tabs>
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
   active: 0,
  //  未评价数据
  arr:[],
  msg:[]
     }
   },
   methods: {
    //  返回
     rete(){
       this.$router.go(-1)
     },
    //  去评价
     goto(item){
       console.log(item);
      this.$router.push({path:'Evaluate',query:{aii:item}})
     },
    //  去查看评价
    go(item){
        this.$router.push({path:'EvaluationDetails',query:{all:item}})
    }
   },
   mounted() {
         //  未评价请求
       this.$api.TobeEvaluated()
       .then(res=>{
         this.arr = res.data.list
       })
       .catch(err=>{
         console.log(err);
       })
      //  已评价请求
         this.$api.AlreadyEvaluated()
       .then(res=>{
         localStorage.setItem('AlreadyEvaluated',res.data.list.length)
         this.msg = res.data.list
         console.log(this.msg);
       })
       .catch(err=>{
         console.log(err);
       })
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
.img{
  width: 100%;
}
.img1{
  width: 70px;
  height: 70px;
}
.van-hairline--bottom{
  padding: 10px 10px;
}
.text{
  margin: 10px 30px;
}
.vox{
  width: 100px;
  height: 25px;
  border-radius: 15px;
  border: 2px solid red;
  right: 20px;
  bottom: 10px;
  color: red;
}
.vox1{
  width: 100px;
  height: 25px;
  border-radius: 15px;
  border: 2px solid rgb(173,173,173);
  right: 20px;
  bottom: 10px;
  color: rgb(173,173,173);
}
</style>