<template>
  <div>
    <!-- 订单结算 -->
    <div class="van-hairline--bottom">
      <div class="flex ju-center pos-rel box">
        <div>订单结算</div>
        <div class="pos-abs move" @click="reter">
          <van-icon name="arrow-left" />
        </div>
      </div>
    </div>

    <!-- 地址 -->
    <div class="flex al-center pos-rel center ju-center">
      <div v-if="add !== null" class="flex al-center pos-rel center">
        <div class="fzicon m-l1">
          <van-icon name="location-o" />
        </div>
        <div class="fz-14 m-l1">
          <div class="flex al-center">
            <div>收货人：{{add.name}}</div>
            <div class="pos-abs ddw">{{add.tel}}</div>
          </div>
          <div class="kmk fz-12">收获地址：{{add.address}}</div>
          <div class="color fz-12">(收货不方便时，可选择免费待收货服务)</div>
        </div>
        <div class="rig pos-abs">
          <van-icon @click="goto" name="arrow" />
        </div>
      </div>
      <div v-else @click="goto" class="text">去设置地址</div>
    </div>
    <div>
      <img src="../img/caitiao.jpg" alt class="img" />
    </div>

    <!-- 数据 -->
    <!-- 购车来的 -->
    <!-- <div>
<div v-for="item in arr" :key="item.id">
      <div class="van-hairline--bottom">
        <div class="flex">
          <div>
            <img :src="item.image_path" alt class="img-b" />
          </div>
          <div>
            <div>{{item.name}}</div>
            <div>{{item.mallPrice}}</div>
          </div>
          <div>{{item.count}}</div>
        </div>
      </div>
    </div>
    <van-submit-bar :price=total*100 button-text="提交订单" @submit="onSubmit" />
    </div> -->
       
    <!-- 详情页from -->
       <div>
         
       </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      // 地址
      add: {},
      // 数据
      arr: [],
      ids:[],
      count:'',
      idDirect:false,
      moon:{}
    };
  },
  methods: {
    reter() {
      this.$router.push("ShoppingCart");
    },
    goto() {
      this.$router.push("/AddressManagement");
    },
    onSubmit(){
     
         this.arr.map(item=>{
           this.ids.push(item.cid)  
         })
              this.$api
              .playder({address:this.add.address,tel:this.add.tel,orderId:this.ids,totalPrice:this.total,
      idDirect:this.idDirect,count:this.count})
         .then(res=>{
           console.log(res)
         })
         .catch(err=>{
           console.log(err)
         })
       
      
    }
  },
  mounted() {
            this.moon=this.$route.query.moon
     this.arr = JSON.parse(localStorage.getItem('num')) 
   
    if(this.$route.query.add){
       this.add = this.$route.query.add;
    }
    else{
      this.$api
      .GetDefaultAddress()
      .then(res => {
        this.add = res.defaultAdd;
      })
      .catch(err => {});
       this.idDirect = false
    }
    
  },
  watch: {},
  computed: {
       total() {
      let sum = 0;
      this.arr.map(item => {
          sum += (item.mallPrice * item.count);
      });
      return sum;
    }
  }
};
</script>

<style scoped lang='scss'>
.img-b {
  width: 100px;
  height: 100px;
}
.color {
  color: rgb(251, 208, 170);
}
.ddw {
  right: 50px;
}
.kmk {
  margin: 10px 0;
}
.box {
  padding: 10px 0;
}
.move {
  left: 20px;
  margin-top: 5px;
}
.rig {
  right: 20px;
}
.fzicon {
  font-size: 30px;
}
.center {
  width: 100%;
  height: 80px;
}
.img {
  width: 100%;
  height: 5px;
}
.text{
  text-decoration: underline;
}
</style>