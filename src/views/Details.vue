<template>
  <div>
    <div class="sky" ref="Silky">
      <div class="somll-b">
        <div class="col flex al-center ju-center pos-abs">
          <van-icon name="arrow-left" @click="reter" />
        </div>
        <van-swipe :autoplay="3000">
          <van-swipe-item>
            <img v-lazy="arr.image" class="img" />
          </van-swipe-item>
          <van-swipe-item>
            <img v-lazy="arr.image" class="img" />
          </van-swipe-item>
        </van-swipe>

        <div class="van-hairline--top-bottom">
          <div class="fz-14 line">{{arr.name}}</div>
          <div class="more m-l1 fz-12">{{arr.present_price | fixed}}</div>
        </div>

        <div class="van-hairline--bottom">
          <div class="dex flex fz-14 al-center ju-center pos-rel">
            <div class="left pos-abs">运费：{{arr.__v | fixed}}</div>
            <div>剩余：{{arr.amount}}</div>
            <div v-if="flag===false" @click="fag" class="pos-abs rigrr">
              收藏：
              <van-icon name="like-o" />
            </div>
            <div v-else @click="add" class="pos-abs rigrr">
              取消收藏：
              <van-icon name="like" color="red" />
            </div>
          </div>
        </div>

        <div class="van-hairline--top-bottom">
          <div class="mom flex al-center fz-14 pos-rel">
            <van-icon name="shop-o" size="20px" />
            <div>有赞的店</div>
            <div class="box-m flex al-center ju-center">官方</div>
            <div class="rig pos-abs flex al-center">
              进入店铺
              <div class="glt">
                <van-icon name="arrow" />
              </div>
            </div>
          </div>
        </div>

        <van-tabs v-model="active">
          <van-tab title="商品详情">
            <div v-html="arr.detail"></div>
          </van-tab>
          <van-tab title="商品评价">商品评价</van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 商品导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="wap-home-o" text="首页" />
      <van-goods-action-icon icon="cart-o" to='/ShoppingCart' text="购物车" />
      <van-goods-action-button type="warning" @click="gotocat" text="加入购物车" />
      <van-goods-action-button type="danger" @click="showPopup" text="立即购买" />
    </van-goods-action>
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '35%' }"
    >
      <div class="van-hairline--bottom">
        <div class="flex">
          <div class="img2 m-l2">
            <img :src="arr.image" alt class="img1" />
          </div>
          <div class="fz-12 m-t2 m-l1">
            <div>{{arr.name}}</div>
            <div class="red1 m-t1">{{arr.present_price | fixed}}</div>
          </div>
        </div>
      </div>

       <div class="van-hairline--bottom pos-rel">
           <div class=" fz-12 pos-rel">
           <div class=" m-t1 m-l1">购买数量 :</div>
           <div class=" text1 flex">
            <div>剩下{{arr.amount}}件</div>
           <div class="red1 m-l1">每人限购50件</div>
           </div>
           <div class="ste pos-abs"> <van-stepper v-model="value" min="1" max="50" /></div> 
           </div>
       </div>
         <div class="momo pos-abs"><van-button type="primary" color="red" block>立即购买</van-button></div> 
    </van-popup>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ids: "",
      arr: {},
      active: 0,
      flag: false,
      show: false,
      value: 1,
    };
  },
  methods: {
    // 加入购物车
    gotocat(){
       this.$api.AddToCart(this.ids)
       .then(res=>{
         Toast.success(res.msg)
    
       })
       .catch(err=>{

       })
    },
    showPopup() {
      this.show = true;
    },
    fag() {
      this.flag = true;
    },
    add() {
      this.flag = false;
    },
    reter() {
      this.$router.go(-1);
    }
  },
  mounted() {
    
    this.ids = this.$route.query.id;

    this.$api
      .Details(this.ids)
      .then(res => {
        console.log(res);
        this.arr = res.goods.goodsOne;
      })
      .catch(ree => {});
    // 下拉滑动
    new BScroll(this.$refs.Silky, {
      scrollY: true,
      click: true
    });
  },
  watch: {},
  computed: {},
    filters: {
        fixed(val) {
          return '￥' + Number(val).toFixed(2)
        }
      },
};
</script>

<style scoped lang='scss'>
.momo{
    width: 100%;
    bottom: 0;
}
.text1{
    margin-top: 5px;
    margin-left: 10px;
    color: rgb(180,177,194);
    padding-bottom: 15px;
}
.ste{
    right: 40px;
    top: 5px;
}
.img2 {
  margin-bottom: 10px;
}
.img1 {
  width: 80px;
  height: 80px;
}
.img {
  width: 100%;
  height: 370px;
}
.col {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgb(127, 127, 127);
  color: white;
  font-size: 20px;
  margin: 10px 10px;
  z-index: 99;
  position: fixed;
}
.line {
  padding: 10px 25px;
}
.more {
  margin-top: -5px;
  padding-left: 10px;
  padding-bottom: 10px;
  color: red;
}
.dex {
  padding: 10px 10px;
  color: rgb(174, 174, 174);
}
.mom {
  padding: 20px 10px;
}
.box-m {
  width: 40px;
  height: 20px;
  background: rgb(255, 68, 68);
  color: white;
  border-radius: 4px;
  margin-left: 10px;
}
.rig {
  right: 25px;
}
.glt {
  margin-top: 6px;
  font-size: 16px;
}
.sky {
  height: 650px;
}
.somll-b {
  height: auto;
}
.left {
  left: 20px;
}
.rigrr {
  right: 20px;
}
.red1{
    color: red;
}
</style>
