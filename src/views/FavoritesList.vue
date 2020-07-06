<template>
 <div>
    <div class="van-hairline--bottom">
       <div class=" flex ju-center pad pos-rel">
     <div class="lft pos-abs"> <van-icon name="arrow-left" @click="rete" color="rgb(101,152,250)"/> </div>    
   <div>我的收藏</div> 
       </div>
     </div>
     
     <div v-if='arr.length>0' >
   <div v-for="item in arr" :key="item.id" >
     <div class="van-hairline--bottom hairline fz-14 flex pos-rel">
          <div class=" m-l2"><img :src="item.image_path" alt="" class="img"></div>
        <div class=" m-l1">
        <div>{{item.name}}</div> 
        <div class="red m-t2">{{item.present_price | fixed }}</div> 
        </div>
            <div class="flex al-center ju-center pos-abs move"><van-icon @click="cancel" name="cross" /></div>
        </div>
     </div>
       
     </div>
     <div v-else>
      <div>您还没有收藏的商品哦，快去收藏吧~~~</div>
     </div>
     
 </div>
</template>

<script>
import { Dialog } from 'vant';
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
   arr:[],
   id:''
     }
   },
   methods: {
rete(){
  this.$router.go(-1)
},
cancel(){
   this.arr.map(item=>{
        this.id = item.cid 
   })
   this.$dialog
        .confirm({
          title: "提示",
          message: "您确定要删除吗"
        })
        .then(() => {
            this.$api.CancelCollection({id:this.id})
      .then(res=>{
      console.log(res);
      })
      .catch(err=>{
      })
       this.Collection()
            })
            .catch(err => {});
   
       },

      Collection(){
        this.$api.Collection()
   .then(res=>{
    console.log(res.data.list);
    this.arr = res.data.list
   })
   .catch(err=>{
   })
     
}
   },
   mounted() {
   this.Collection()

   
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