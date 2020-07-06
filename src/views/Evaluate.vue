<template>
 <div>
     <div class="van-hairline--bottom">
       <div class=" flex ju-center pad pos-rel">
     <div class="lft pos-abs"> <van-icon name="arrow-left" @click="rete"  color="rgb(101,152,250)"/> </div>    
   <div>评价中心</div> 
       </div>
     </div>

<div class=" flex">
   <div class="m-t1 m-l2"><img :src="msg.image_path" alt="" class="img"></div>
      <div  class="move fz-14">
      <div>商品评分</div>
     <van-rate
     class=" m-t1"
    v-model="value"
  :size="20"
  color="#ee0a24"
  void-icon="star"
  void-color="#eee"
/>
      </div>
</div>

<div class="box">
<van-field
  v-model="message"
  rows="1"
  autosize
  type="textarea"
  placeholder="说说购买感受吧~~~"
/>
</div>
<div class="van-hairline--bottom">
<van-uploader :after-read="afterRead" />
</div>

<div class="m-t1 m-l1">
<van-checkbox v-model="checked">匿名评价</van-checkbox>
</div>

<div class="flex ju-center m-t2">
    <van-button class="btn" @click="end" type="primary">提交</van-button>
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
      msg:{},
       value: 1,
       message:'',
       checked:false,
       image:[],
       
     }
   },
   methods: {
         afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
     //  返回
     rete(){
       this.$router.go(-1)
     },
    //   提交
     end(){
         this.$api.Comment({id:this.msg.cid,rate:this.value,content:this.message,
         anonymous:this.checked,_id:this.msg._id,order_id:this.msg.order_id,image:this.image})
         .then(res=>{
             console.log(res);
             Toast.success(res.msg)
             this.$router.go(-1)
         })
         .catch(err=>{
             console.log(err);
         })
     }
   },
   mounted() {
      this.msg=this.$route.query.aii
  console.log(this.msg);
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
    width: 70px;
    height: 70px;
}
.move{
    margin: 20px 40px;
}
.van-cell{
    height: 250px;
    background: rgb(247,247,247);
}
.btn{
  width: 90%;
}
</style>