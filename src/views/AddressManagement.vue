<template>
 <div>
     <!-- 地址列表 -->
         <div class="van-hairline--bottom">
       <div class=" flex ju-center pad pos-rel">
     <div class="lft pos-abs"> <van-icon name="arrow-left" @click="rete"  color="rgb(101,152,250)"/> </div>    
   <div>地址列表</div> 
       </div>
     </div>
    
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
  @select="select"
/>
<div v-if="list.length<=0">暂无收货地址</div>
 </div>
</template>

<script>
import { Toast } from 'vant';
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       list:[],
chosenAddressId:'1',
look:true
     }
   },
   methods: {
    
      onAdd() {
      this.$router.push('/NewAddress')
    },
     onEdit(item, index) {
     this.$router.push({path:'/NewAddress',query:{obj:JSON.stringify(item,index)}})
    },
    select(item,index){
     this.$router.push({path:'Settlement',query:{add:item,look:this.look}})
    
    },

    GetAddress(){
this.$api.GetAddress()
    .then(res=>{
      this.list = res.address
      res.address.map((item, index) => {
          this.$set(item,'id',(index+1).toString())
           
        })
    })
    .catch(err=>{
      console.log(err)
    })
    },
     rete(){
       this.$router.go(-1)
     },
   },
   mounted() {
    this.GetAddress()
     this.chosenAddressId = localStorage.getItem('index')
   },
   watch: {

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
</style>