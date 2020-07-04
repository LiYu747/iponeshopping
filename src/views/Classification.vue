<template>
  <div class="GG-sd-HHHH">
    <div class="va">

      <div class="text fz-14 ">商品分类</div>
   
    </div>
   
    <div class="flex">
          <!-- 侧边栏 -->
      <div class="nav posflex">
        <van-sidebar v-model="activeKey">
          <div v-for="item in category" :key="item.id">
            <van-sidebar-item @click="add(item)" :title="item.mallCategoryName" />
          </div>
        </van-sidebar>
      </div>

      <div class="lllt dsdd-dsd">
        <van-tabs @change="mole" v-model="active">
          <div v-for="item1 in category[activeKey].bxMallSubDto" :key="item1.id">
            <div>
              <van-tab :name="item1.mallSubId" :title="item1.mallSubName">
                <div class="aaa">
                <div v-for="itema in arr" :key="itema.id">
                  <div v-for="itemb in msg" :key="itemb.id">
                    <div class="van-hairline--top mooo">
                      <div class="flex bron">
                        <img :src="itemb.image_path" @click="goto(itemb)" class="img" alt />
                        <div class="m-l2 fz-14">
                          <div>{{itemb.name}}</div>
                          <div class="pos mar flex al-center pos-abs">
                           <div class=" fz-cu">￥{{itemb.present_price}}</div>
                          <s class="let">{{itemb.orl_price}}</s>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                
              </van-tab>
            </div>
          </div>
        </van-tabs>
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
      activeKey: 0,
      active: 0,
      arr: [],
      id: "",
      msg: []
    };
  },
  methods: {
    goto(itemb){
       this.$router.push({path:'/Details',query:{id:itemb.id}})
       this.$utils.addViews(itemb)
    },
    add(item) {
      this.id = item.bxMallSubDto[0].mallSubId;
      this.getData();
      this.active=0
    },
    getData() {
      this.$api
        .ClassificationQuery(this.id)
        .then(res => {
          this.msg = res.dataList;
         
        })
        .catch(err => {
          console.log(err);
        });
    },
    mole(name) {
      this.id = name;
      this.getData();
    }
  },
  mounted() {
    this.arr = JSON.parse(localStorage.getItem("store")).category;
    this.id = this.arr[0].bxMallSubDto[0].mallSubId;
    this.getData();
    if(this.$route.query.index){
      this.activeKey =   this.$route.query.index
      this.id = this.arr[this.activeKey].bxMallSubDto[0].mallSubId;
        this.getData()
    }
    else{
       this.id = this.arr[0].bxMallSubDto[0].mallSubId;
    }
  },
  watch: {},
  computed: {
    category() {
      return this.$store.state.category;
    }
  }
};
</script>

<style scoped lang='scss'>
.aaa{
  padding-top: 50px;
}
.lllt{
  margin-left: 100px;
  margin-top: 40px;
}
.va{
width: 100%;
  line-height: 30px;
  text-align: center;
  background: #fff;
  position: fixed;
  z-index: 2;
}
.text {
  margin: 10px 0;
}

.img {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(238, 238, 238);
}
.mooo {
  padding: 10px 10px;
  color: red;

}
.pos{
  bottom: 30px;
}
.mar{
 line-height: 1px;
}
.let{
  color: rgb(95,95,95);
  margin-left: 5px;
  font-size: 13px;
}
.nav{
  margin-top: -6px;
}
.posflex{
  position: fixed;
  z-index: 3;
  top: 40px;
}

</style>