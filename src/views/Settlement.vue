<template>
 <div>
     <!-- 订单结算 -->
<div class="van-hairline--bottom">
  <div class=" flex ju-center pos-rel box">
    <div>订单结算</div>  
    <div class="pos-abs move" @click="reter"> <van-icon name="arrow-left"  /></div>
  </div>
</div>

  <!-- 地址 -->
  <div class=" flex al-center pos-rel center">
    <div class="fzicon m-l1"><van-icon name="location-o" /></div>
    <div class=" fz-14 m-l1">
      <div class=" flex al-center">
    <div>收货人：</div>
    <div class=" pos-abs ddw">17608040164</div>
      </div>
    <div class="kmk fz-12">收获地址：</div>
    <div class="color fz-12">(收货不方便时，可选择免费待收货服务)</div>
    </div>
    <div class="rig pos-abs"><van-icon name="arrow" /></div>
  </div>
   <div><img src="../img/caitiao.jpg" alt="" class="img"></div>
     
     <!-- 数据 -->
     <div v-for="item in arr" :key="item.id">
   <div class="van-hairline--bottom">
     <div class=" flex">
  <div><img :src="item.image_path" alt="" class="img-b"></div>
    <div>
   <div>{{item.name}}</div>
    <div>{{item.mallPrice}}</div>
    </div>
    <div>{{item.count}}</div>
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
arr:[]
     }
   },
   methods: {
   reter(){
    this.$router.go(-1)
   }
   },
   mounted() {
      this.arr =  this.$route.query.id
      console.log(this.arr)
      this.$api.GetDefaultAddress()
      .then(res=>{
        console.log(res)
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
.img-b{
  width: 100px;
  height: 100px;
}
.color{
  color: rgb(251,208,170);
}
.ddw{
  right: 50px;
 
}
.kmk{
  margin: 10px 0;
}
.box{
  padding: 10px 0;
}
.move{
  left: 20px;
  margin-top: 5px;
}
.rig{
  right: 20px;
}
.fzicon{
  font-size: 30px;
}
.center{
  width: 100%;
  height: 80px;
}
.img{
  width: 100%;
  height: 5px;  
}
</style>