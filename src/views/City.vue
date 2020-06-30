<template>
  <div> 
    <!-- 城市列表-->
    <div class="nav flex al-center ju-center pos-rel">
     <div class=" pos-abs left-n" @click="Return">＜</div>
     <div class="fz-14">城市列表</div>
    </div>
    <!-- 搜索 -->
    <div class="box-t">
    <div ><van-search background="rgb(242,242,242)" placeholder="请输入城市关键词" class="color-t ipt"/></div>
    <div class=" fz-14 m-l1">当前城市</div>
    </div>
    <!-- 当前城市 -->
      <div class="box-th fz-14">
      <div class="cit flex al-center ju-center">{{citys}}</div> 
      </div>
      <!-- 热门城市 -->
      <div class="city-f fz-14 flex al-center">热门城市</div>
      <div class="box-f">
        <div v-for="item in this.city.data.hotCities" :key="item.id">
          <div class=" m-l2 m-t1">
   <div class="cit flex al-center ju-center fz-14">{{item.name}}</div> 
          </div>   
        </div>
      </div>
      <!-- 城市列表 -->
        <Cityson></Cityson>
  </div>
</template>

<script>
import Cityson from '../components/city/Cityson';
import city from "../lib/city";
export default {
  name: "",
  props: {},
  components: {
    Cityson
  },
  data() {
    return {
     arr:{},
     city:city
      
    };
  },
  methods: {
 Return(){
   this.$router.go(-1)
 }
  },
  mounted() {
  
  },
  watch: {},
  computed: {
    citys(){
      return this.$store.state.city
    }
  }
};
</script>

<style scoped lang='scss'>
.nav{
  width: 100%;
  height: 40px;
}
.left-n{
  left: 30px;
  font-size: 25px;
}
.box-t{
  width: 100%;
  height: 80px;
  background: rgb(242,242,242);
}
.van-search__content{
    background: white;
}
.box-th{
  width: 100%;
  height: 30px;
 
}
.cit{
  width: 90px;
  height:25px;
  border:2px,solid,rgb(225,225,225) ;

}
.box-f{
 width: 100%;
 display: flex;
 flex-wrap: wrap;
}
.city-f{
   width: 100%;
   height: 30px;
   background: rgb(242,242,242);
   
}
.ipt{
  width: 370px;
}
</style>