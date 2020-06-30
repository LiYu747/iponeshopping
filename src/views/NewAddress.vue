<template>
 <div>
     <!-- 编辑地址 -->
     <div class="van-hairline--bottom">
       <div class=" flex ju-center pad pos-rel">
     <div class="lft pos-abs"> <van-icon name="arrow-left" @click="rete" color="rgb(101,152,250)"/> </div>    
   <div>编辑地址</div> 
       </div>
     
     </div>
     <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :address-info="AddressInfo"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
/>
 </div>
</template>

<script>
import { Toast } from 'vant';
import area from '../lib/area'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        areaList:area,
        AddressInfo:{}
     }
   },
   methods: {
rete(){
  this.$router.go(-1)
},
     
 onSave(content) {
    this.content = this.content
    this.$api.Address({
    name:content.name,
    tel:content.tel,
    address:`${content.province}${content.city}${content.county}${content.addressDetail}`,
    isDefault:content.isDefault,
    province:content.province,
    city:content.city,
    county:content.county,
    addressDetail:content.addressDetail,
    areaCode:content.areaCode,
    id:content._id
    })
    .then(res=>{
          this.$router.push('AddressManagement')
    })
    .catch(err=>{
      console.log(err)
    })
    },
    onDelete(content) {
      this.$api.DeleteAddress({id:content._id})
      this.$router.push('AddressManagement')
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    },
   },
   mounted() {
     if(this.$route.query.obj){
   this.AddressInfo = JSON.parse(this.$route.query.obj)
     }

 
  
   
     
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