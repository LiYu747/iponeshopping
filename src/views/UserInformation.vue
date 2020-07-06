<template>
  <div>
    <!-- 用户 -->
    <div v-if="this.name===null">
     <div class="flex ju-center">
        <div class="text fz-14">会员中心</div>
      </div>
      <div class="box pos-rel flex-d al-center ju-center">
        <div>
          <img src="../img/购物.png" alt class="img" />
        </div>
        <div class="bai fz-14" @click="goto">登录/注册</div>
      </div>
    </div>
    <!-- 已登录 -->
    <div v-else>
      <div class="flex ju-center">
        <div class="text fz-14">会员中心</div>
      </div>
      <div class="box pos-rel flex-d al-center ju-center">
        <van-icon name="setting" @click="Modify" class="move" />
        <div>
          <img :src="arr.avatar" alt class="img" />
        </div>
        <div class="itl bai fz-cu">欢迎您：{{arr.nickname}}</div>
        <div class="bai fz-14" @click="out">退出登录</div>
      </div>
    </div>

    
    <!-- 订单 -->
    <div class="van-hairline--bottom flex m-t1">
      <div class="flex-d al-center aa">
        <div class="Icon">
          <van-icon name="balance-pay" />
        </div>
        <div class="fz-12">待付款</div>
      </div>

      <div class="flex-d al-center">
        <div class="Icon">
          <van-icon name="free-postage" />
        </div>
        <div class="fz-12">待发货</div>
      </div>

      <div class="flex-d al-center">
        <div class="Icon">
          <van-icon name="points" />
        </div>
        <div class="fz-12">待收货</div>
      </div>

      <div class="flex-d al-center"  @click="gooo">
        <div class="Icon">
          <van-icon v-if="name === null" name="thumb-circle-o" />
          <van-icon v-else :badge=AlreadyEvaluated name="thumb-circle-o" />
        </div>
        <div class="fz-12">评价</div>
      </div>

      <div @click="complete" class="flex-d al-center">
        <div class="Icon">
          <van-icon name="like-o" />
        </div>
        <div class="fz-12">已完成</div>
      </div>
    </div>
     
    <!-- 全部订单 -->
    <Allson></Allson>

    <Baserail></Baserail>
  </div>
</template>

<script>
import Allson from "../components/userInformation/Allson";
import Baserail from "../components/baserail/Baserail";
import { Dialog } from 'vant';
import city from '../lib/city';
export default {
  name: "",
  props: {},
  components: {
    Allson,
    Baserail
  },
  data() {
    return {
      arr: {},
      name:null,
      AlreadyEvaluated:""

    };
  },
  methods: {
    gooo(){
      if(this.name===null){
           Dialog.confirm({
          title: '标题',
          message: '您还没登录，去登陆吧~~~',
       })
       .then(() => {
    // on confirm
      })
       .catch(() => {
    // on cancel
  });
      }
      else{
       this.$router.push('EvaluationCenter')
      }
        
    },
    goto(){
      this.$router.push('Login')
    },
    User() {
      this.$api
        .UserInformation()
        .then(res => {
          this.arr = res.userInfo;
        })
        .catch(ree => {
          console.log(ree);
        });
    },
    out() {
      this.$api
        .LoginOut()
        .then(res => {
          console.log(res);
          localStorage.removeItem('username')
          localStorage.removeItem('Manual')
         this.$router.go(0)
        })
        .catch(err => {});
    },
    Modify() {
      this.$router.push("/Modify");
    },
    complete(){
      if(this.name===null){
             Dialog.confirm({
          title: '标题',
          message: '您还没登录，去登陆吧~~~',
       })
       .then(() => {
    // on confirm
      })
       .catch(() => {
    // on cancel
  });
      }
      else{
      this.$router.push("/Allorders");
      }
      
    }
  },
  mounted() {
    this.name=localStorage.getItem("username");
    this.User();
      this.AlreadyEvaluated = localStorage.getItem("AlreadyEvaluated");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.aa {
  margin-bottom: 10px;
}
.box {
  width: 100%;
  height: 200px;
  background: rgb(227, 12, 123);
}
.text {
  margin: 10px 0;
}
.move {
  color: white;
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
}
.img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.itl {
  margin: 10px 0;
}
.Icon {
  font-size: 20px;
}
.van-hairline--bottom {
  justify-content: space-around;
}
</style>