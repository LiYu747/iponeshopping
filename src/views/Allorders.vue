<template>
 <div class="box">
     <div class=" flex-d al-center ">
         <div class=" flex pos-rel al-center ju-center box-b">
         <div class=" kuor pos-abs"><van-icon @click="rete" name="arrow-left" /></div>
         <div>我的订单</div>
         </div>
         <div class="FGGG-Sf fenz m-t2">
<van-tabs v-model="active">
  <van-tab title="全部" class=" flex-d  al-center ">
      <div v-for="item in list"  class="box-every m-t2" :key="item.id">
          <div class="van-hairline--bottom flex fz-14 pos-rel">
            <div>订单编号:{{item.order_id}}</div> 
            <div class="text pos-abs">交易完成</div>
          </div>
             <div class="van-hairline--bottom pos-rel">
          <div v-for="item1 in item.order_list" :key="item1.id">
             <div class="m-t1 flex fz-14">
            <img :src="item1.image_path" alt="" class="img">
              <div class="text1 m-l1">{{item1.name}}</div>
             <div class=" pos-abs move flex-d al-center ">
           <div>{{item1.present_price}}</div>
             <div class=" fz-12">x{{item1.count}}</div>
             </div>
            
              
              </div>
             </div>
                   </div>
                   <div class=" m-t1 left fz-14">
                    <div>创建时间: {{item.add_time}}</div>
                   <div>收货地址: {{item.address}}</div>
                   <div class="butt">共{{item.order_list.length}}件商品 合计:{{item.mallPrice}}</div>
                   </div>
                 
         
      </div>
  </van-tab>
  <van-tab title="待支付">内容 2</van-tab>
  <van-tab title="代发货">内容 3</van-tab>
  <van-tab title="待收货">内容 4</van-tab>
  <van-tab title="已完成">内容 4</van-tab>
</van-tabs>
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
        list:[],
         active: 0,
     }
   },
   methods: {
   rete(){
       this.$router.go(-1)
   }
   },
   mounted() {
     this.$api.getMyOrder()
     .then(res=>{
      console.log(res);
      this.list = res.list
     })
     .catch(err=>{

     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.kuor{
    left: 20px;
    margin-top: 4px;
}
.box-b{
    width: 100%;
    height: 40px;

}
.left{
    width: auto;
    text-align: right;
    margin-right: 10px;
}
.move{
    width: 50px;
  right: 0px;
}

.text1{
    width: 200px;

}
.box{
    background: rgb(242,242,242);
     height: 100vh;
}
.box-every{
    width: 90%;
    background: white;
    border-radius: 10px;
}
.van-hairline--bottom{
    padding: 10px 10px;
}
.img {
  width: 70px;
  height: 70px;
  border: 1px solid rgb(240, 240, 240);
}
.fenz{
    width: 100%;
}
.butt{
   margin-bottom: 10px;
}
.text{
    color: rgb(210,89,27);
    right: 20px;
}
</style>