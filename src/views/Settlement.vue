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

    <!-- 详情页from -->
    <div v-if="idDi ==='0'">
        <div class="van-hairline--bottom fz-14">
          <div class="flex pos-rel">
            <div class=" m-l2 m-t1">
              <img :src="moon.image_path" alt class="img-b" />
            </div>
            <div class=" m-l2 m-t1">
              <div class="red1">{{moon.name}}</div>
              <div class="m-t1 flex">
                    <div class="red1">{{moon.present_price | fixed}}</div>
                    <div class="rig-r pos-abs">x{{moon.count}}</div>
            </div>
          </div>
        </div>
      </div>
      <van-submit-bar :price="totol*100" button-text="提交订单" @submit="onSubmit" />
    </div>
    <!-- 数据 -->
    <!-- 购车来的 -->
    <div v-if="idDi === '1'">
      <div v-for="item in arr" :key="item.id">
        <div class="van-hairline--bottom fz-14">
          <div class="flex pos-rel">
            <div class=" m-l2 m-t1">
              <img :src="item.image_path" alt class="img-b" />
            </div>
            <div class=" m-l2 m-t1">
              <div class="red1">{{item.name}}</div>
              <div class="m-t1 flex">
                    <div class="red1">{{item.mallPrice | fixed}}</div>
                    <div class="rig-r pos-abs">x{{item.count}}</div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      <van-submit-bar :price="total*100" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
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
      count: "",
      ids: [],
      ida:[],
      idDi: "0",
      moon: {},
      kk: "",
      present_price: "",
      look:false
    };
  },

  methods: {
   
    goto() {
      this.$router.push("/AddressManagement");
    },
    onSubmit() {
          if(this.idDi==='1'){
             this.arr.map(item=>{
             this.ids.push(item.cid)
           })
                this.$api
                .playder({address:this.add.address,tel:this.add.tel,orderId:this.ids,totalPrice:this.total,
        idDirect:false,count:this.arr.length})
           .then(res=>{
               Toast.success(res.msg);
               this.$router.push('/')
           })
           .catch(err=>{
             console.log(err)
           })
      }
      else{
             this.ida.push(this.moon.id)
                this.$api
                .playder({address:this.add.address,tel:this.add.tel,orderId:this.ida,totalPrice:this.totol,
        idDirect:true,count:this.moon.count})
           .then(res=>{
                Toast.success(res.msg);
               this.$router.push('/')
           })
           .catch(err=>{
             console.log(err)
           })
      }
    },
     reter() {
      this.$router.go(-1);
    },
  },
  mounted() {
    //  详情页
    if(localStorage.lable){
    this.idDi = localStorage.getItem('lable')
   
    }
    else{{
    this.idDi = this.$route.query.lable;
    }}
    // 购物车1
    if(localStorage.lables){
     this.idDis = localStorage.getItem('lables')
   
    }
    else{
        this.idDis = this.$route.query.lables;
    }
    

    // 购物车
    if (localStorage.num) {
      
      this.arr = JSON.parse(localStorage.getItem("num"));
  
    } else {
      this.arr = JSON.parse(this.$route.query.num);
    }

    //  详情页from
    if (localStorage.moon) {
      this.moon = JSON.parse(localStorage.getItem("moon"));
      
    } else {
      this.moon = this.$route.query.moon;
    }
 
    //  地址
    this.look = this.$route.query.look
 
    if(this.look === true){
       this.add = this.$route.query.add
    }
    else{
         this.$api
      .GetDefaultAddress()
      .then(res => {
        this.add = res.defaultAdd;
      })
      .catch(err => {});
    }
      
     
  },
  watch: {},
   filters: {
        fixed(val) {
          return '￥' + Number(val).toFixed(2)
        }
      },
  computed: {
    total() {
      let sum = 0;
      this.arr.map(item => {
        sum += item.mallPrice * item.count;
      });
      return sum;
    },
    totol() {
      return this.moon.present_price * this.moon.count;
    },
     
  }
};
</script>

<style scoped lang='scss'>
.rig-r{
  right: 40px;
}
.van-hairline--bottom{
  padding: 10px 0;
}
.img-b {
  width: 70px;
  height: 70px;
  border: 1px solid rgb(240,240,240);
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
.text {
  text-decoration: underline;
}
.red1{
  color: red;
}
</style>