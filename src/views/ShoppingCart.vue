<template>
  <div>
    <div class="posflex">
      <!-- 首页 -->
      <div class="van-hairline--bottom pad flex ju-center">
        <div>购物车</div>
      </div>

      <!-- 全选/反选 -->
      <div class="van-hairline--bottom flex fz-12 pos-rel puff al-center">
        <div v-if="Allchecked===false||arr.length===0">
          <van-checkbox class="m-l2" v-model="Allchecked" @click="All">全选</van-checkbox>
        </div>
        <div v-else-if="Allchecked===true">
          <van-checkbox class="m-l2" v-model="Allchecked" @click="All">取消全选</van-checkbox>
        </div>
        <div class="pos-abs move">
          <div>合计：{{total | fixed}}</div>
          <div>请确认订单</div>
        </div>
      </div>
      <!-- 删除/结算 -->
      <div class="box pos-rel m-t1">
        <div class="mova pos-abs">
          <van-button type="primary" class="btn" @click="del" color="rgb(230,5,127)">删除</van-button>
          <van-button type="primary" class="btn" @click="Goto" color="rgb(230,5,127)">去结算</van-button>
        </div>
      </div>
    </div>
    <div v-if="arr.length>0">
      <div class="topp pos-rel">
        <!-- 商品详情 -->
        <div v-for="item in arr" :key="item.id">
          <div class="van-hairline--bottom pad flex al-center fz-14 red1 pos-rel">
            <div class="lin">
              <van-checkbox @click="chang(item)" v-model="item.check" shape="square" />
            </div>
            <div>
              <img :src="item.image_path" alt class="img" />
            </div>
            <div class="m-l2 back-ADK-dd">
              <div class="pos-abs tom">{{item.name}}</div>
              <div class="pos-abs bom flex ju-between">
                <div>￥{{item.mallPrice}}</div>
                <div>
                  <van-stepper
                    v-model="item.count"
                    @change="add(item)"
                    theme="round"
                    button-size="22"
                    disable-input
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom"></div>
    </div>

    <div v-else>
      <div class="toptop pos-rel">
   <div >去购物</div>
      </div>
   
    </div>

    <Baserail></Baserail>
  </div>
</template>

<script>
import Baserail from "../components/baserail/Baserail";
export default {
  name: "",
  props: {},
  components: {
    Baserail
  },
  data() {
    return {
      Allchecked: false,
      arr: [],
      ass: [],
      ids: [],
      aaa: []
    };
  },
  methods: {
    // 全选
    All() {
      this.arr.map(item => {
        item.check = this.Allchecked;
      });
    },
    // 删除
    del() {
      this.$dialog
        .confirm({
          title: "标题",
          message: "您确定要删除吗"
        })
        .then(() => {
          this.aaa = this.arr.filter(item => {
            return item.check === true;
          });

          this.aaa.map(item => {
            this.ids.push(item.cid);
          });

          this.$api
            .DeleteShop(this.ids)
            .then(res => {
              this.$api
                .GetCard()
                .then(res => {
                  this.arr = res.shopList;
                })
                .catch(err => {});
            })
            .catch(err => {});
          if (this.arr.length !== 0) {
            this.Allchecked = false;
          }
          console.log(this.Allchecked);
        })
        .catch(() => {
          // on cancel
        });
      if (this.arr.length === 0) {
        this.Allchecked === false;
      }
    },
    //    判断是否全选
    chang(item) {
      this.Allchecked = this.arr.every(item => {
        return item.check === true;
      });
    },
    //  修改数量
    add(item) {
      this.$api
        .EditCart({
          count: item.count,
          id: item.cid,
          mallPrice: item.mallPrice
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
    },
    // 结算页面
    Goto() {
      this.msg = this.arr.filter(item1 => {
        return item1.check === true;
      });
      this.$router.push({ path: "Settlement", query: { id: this.msg } });
    }
  },
  mounted() {
    this.$api
      .GetCard()
      .then(res => {
        this.arr = res.shopList;
        console.log(res);
      })
      .catch(err => {});
  },
  watch: {},
  computed: {
    // 定义总价
    total() {
      let sum = 0;
      this.arr.map(item => {
        if (item.check) {
          sum += item.mallPrice * item.count;
        }
      });
      return sum;
    }
  },
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  }
};
</script>

<style scoped lang='scss'>
.toptop{
  top: 200px;
}
.topp {
  top: 160px;
}
.posflex {
  position: fixed;
  width: 100%;
  z-index: 2;
  background: white;
}
.bom {
  width: 180px;
  bottom: 20px;
}
.tom {
  top: 10px;
}
.red1 {
  color: rgb(229, 83, 77);
}
.lin {
  margin: 0 20px;
}
.img {
  width: 70px;
  height: 70px;
  border: 1px solid rgb(240, 240, 240);
}
.pad {
  padding: 10px 0;
}
.puff {
  padding: 20px 0;
}
.move {
  right: 70px;
}
.btn {
  height: 35px;
  margin-left: 10px;
}
.mova {
  right: 30px;
}
.box {
  height: 50px;
}
.bottom {
  margin-bottom: 210px;
}
</style>