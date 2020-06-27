<template>
  <div>
    <!-- 用户 -->
    <div class="flex ju-center">
      <div class="text fz-14">会员中心</div>
    </div>
    <div class="box pos-rel flex-d al-center ju-center">
       <van-icon name="setting" @click="Modify" class="move" />
      <div>
        <img :src="arr.avatar" alt class="img" />
      </div>
      <div class="itl bai fz-cu">欢迎您：{{arr.nickname}}</div>
      <div class="bai fz-14">退出登录</div>
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

      <div class="flex-d al-center">
        <div class="Icon">
          <van-icon name="thumb-circle-o" />
        </div>
        <div class="fz-12">评价</div>
      </div>

      <div class="flex-d al-center">
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
import Allson from '../components/userInformation/Allson'
import Baserail from '../components/baserail/Baserail'
export default {
  name: "",
  props: {},
  components: {
    Allson,
    Baserail
  },
  data() {
    return {
      arr: {}
    };
  },
  methods: {
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
    Modify(){
      this.$router.push('/Modify')
    }
  },
  mounted() {
    this.User();
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