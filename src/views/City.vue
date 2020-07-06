<template>
  <div> 
    <!-- 城市列表-->
    <div class="nav flex al-center ju-center pos-rel">
     <div class=" pos-abs left-n" @click="Return"><van-icon size="16px" name="arrow-left" /></div>
     <div class="fz-14">城市列表</div>
    </div>
    <!-- 搜索 -->
    <div class="box-t">
    <div ><van-search background="rgb(242,242,242)"  @input='ipt' @focus='obtain' v-model="value" placeholder="请输入城市关键词" class="color-t ipt"/></div>
    <div class=" fz-14 m-l1"></div>
    </div>
    <div v-if="flag === 0">
 <!-- 当前城市 -->
       <div class=" fz-14 text">当前城市</div>
      <div class="box-th fz-14">
      <div @click="gogo" class="cit flex al-center ju-center">{{citys}}</div> 
      </div>
      <!-- 热门城市 -->
      <div class="city-f fz-14 flex al-center">热门城市</div>
      <div class="box-f">
        <div v-for="item in this.city.data.hotCities" @click="goto(item)" :key="item.id">
          <div class=" m-l2 m-t1">
   <div class="cit flex al-center ju-center fz-14">{{item.name}}</div> 
          </div>   
        </div>
      </div>
      <!-- 城市列表 -->
        <Cityson></Cityson>
    </div>
    <div v-else>
         <div v-for="item in msg" @click="goto(item)"  :key="item.id">
           {{item.name }} 
         </div>
    </div>
   
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
     city:city,
     value:'',
     flag:0,
     msg:[],
     datas:[],
     boox:[]
      
    };
  },
  methods: {
 Return(){
   this.$router.go(-1)
 },
 obtain(){
   this.flag = 1
 },
 ipt(){
       if(this.value === ''){
         this.msg=[]
       }
       else{
           this.msg = this.boox.filter(item1=>{
        // return item.includes(value) === true
        return JSON.stringify(item1).indexOf(this.value) !== -1
      })
       }
 },
    goto(item){
      this.$router.push('/')
      localStorage.setItem('Manual',JSON.stringify(item.name))
    },
    gogo(){
        this.$router.push('/')
      localStorage.setItem('Manual',JSON.stringify(this.citys))
    }
        
  },
  mounted() {
    this.datas=Object.values(this.city.data.cities) ;
      this.datas.map((item,index)=>{
           item.map(items=>{
           this.boox.push(items)
           })
       })
        
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
  height: 50px;
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
.text{
  width: 100%;
  background: rgb(242,242,242);
  padding: 10px 0;
}
</style>