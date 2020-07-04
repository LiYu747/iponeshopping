<template>
 <div>
    <div class="van-hairline--bottom">
       <div class=" flex ju-center pad pos-rel">
     <div class="lft pos-abs"> <van-icon name="arrow-left" @click="rete" color="rgb(101,152,250)"/> </div>    
   <div>最近浏览</div> 
       </div>
     </div>
     
     <div >
   <div v-for="(item,index) in arr" :key="index" >
        <div class="van-hairline--bottom hairline fz-14 flex pos-rel">
 <div class=" m-l2"><img :src="item.image" alt="" class="img"></div>
        <div class=" m-l1">
        <div>{{item.name}}</div> 
        <div class="flex ">
       <div class="red m-t2">{{item.present_price | fixed }}</div>
       <s class="iui">{{item.orl_price}}</s> 
        </div>
        </div>
            <div class="flex al-center ju-center pos-abs move"><van-icon @click="del(item,index)" name="cross" /></div>
        </div>
        </div>
     </div>
   
 </div>
</template>

<script>
import groupBy from 'lodash/groupBy'
import uniqWith from 'lodash/uniqWith'
import isEqual from 'lodash/isEqual'
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
      rete(){
        this.$router.go(-1)
      },
      del(item,index){
         this.arr.splice(index,1)
         localStorage.setItem('views',JSON.stringify(this.arr))
      }
   },
   mounted() {
    let arr = JSON.parse(localStorage.getItem('views'))
    this.arr = uniqWith(arr,isEqual)
    console.log(this.arr);
   },
   watch: {

   },
    filters: {
        fixed(val) {
          return '￥' + Number(val).toFixed(2)
        }
      },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.iui{
  margin-top: 23px;
  margin-left: 5px;
}
.pad{
  padding: 10px 0;
}
.lft{
  left: 20px;
}
.hairline{
  padding: 10PX 0;
}
.img{
  width: 70px;
  height: 70px;
  border: 1px solid rgb(243,243,244);
  box-shadow: 3px 3px 3px 3px rgb(243,243,244);
}
.move{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid rgb(198,130,57);
  right: 20px;
  bottom: 10px;
}
</style>