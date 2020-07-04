<template>
 <div>
     <div class="van-hairline--bottom">
  <div class="flex al-center pos-rel ju-center">
     <div class="move pos-abs"><van-icon name="arrow-left" @click="goto" class="iocn" /></div> 
   <div class=" m-t1 but fz-14">个人资料</div>
     </div>
     </div>
   
   <div class="van-hairline--bottom">
       <div class=" flex al-center pos-rel box">
  <div class=" m-l2">头像</div>
  <div class="mmov pos-abs flex al-center">
<img :src="arr.avatar" alt class="img" />
      <div class=" m-l1"><van-icon name="arrow" /></div>  
  </div>
       </div>
   </div>

   <van-cell-group>
  <van-field v-model="arr.username" label="用户名" placeholder="请输入用户名" />
</van-cell-group>

 <van-cell-group>
  <van-field v-model="arr.nickname" label="昵称" placeholder="请输入昵称" />
</van-cell-group>

 <van-cell-group>
  <van-field v-model="arr.gender" label="性别" placeholder="请输入性别" />
</van-cell-group>

  <van-cell-group>
  <van-field  label="邮箱" placeholder="请输入邮箱" />
</van-cell-group>

 <van-cell-group>
  <van-field v-model="year" @focus='hoo' label="出生年月" placeholder="请输入生日" />
  <div v-if="falg===1">
   <van-datetime-picker
  v-model="currentDate"
  type="date"
  title="选择年月日"
  :min-date="minDate"
  :max-date="maxDate"
  @confirm = 'confirm'
  @cancel = 'quxao'
/>
  </div>
</van-cell-group>

<div class=" flex ju-center ttoopp">
<van-button type="primary" class="keep" @click="ption">保存</van-button>
</div>

<div class=" flex ju-center m-t2">
<van-button type="default" class="keep" >取消</van-button>
</div>

 </div>
</template>

<script>
 import dayjs from 'dayjs'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
   arr:{},
   year:'',
    minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate:'' ,
      one:'',
      two:'',
      therr:'',
      falg:0
     }
   },
   methods: {
     ption(){
            this.$api
        .Preservation(
             this.arr.gender,
             this.one,
             this.two,
             this.three,
            this.arr._id,
            this.arr.nickname,
        )
        .then(res => {
            console.log(res);
            this.$router.go(-1)
        })
        .catch(ree => {
          console.log(ree);
        });
     },
     confirm(val){
       this.year = dayjs(val).format('YYYY年MM月DD日')
       this.one = dayjs(val).format('YYYY')
       this.two = dayjs(val).format('MM')
       this.three = dayjs(val).format('DD')
     },
     cancel(){
          this.$api
        .UserInformation()
        .then(res => {
          this.arr = res.userInfo;
          console.log(this.arr)
          this.year = res.userInfo.year+'年'+res.userInfo.month+'月'+res.userInfo.day+'日'
          this.one =  res.userInfo.year
          this.two =  res.userInfo.month
          this.three =  res.userInfo.day

        })
        .catch(ree => {
          console.log(ree);
        });
     },
     goto(){
         this.$router.go(-1)
     },
     hoo(){
       this.falg = 1
     },
     quxao(){
       this.falg = 0
     }
   },
   mounted() {
     this.cancel() 

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.iocn{
    color: rgb(68,159,250);
}
.move{
    top: 14px;
 left: 20px;
}
.but{
margin-bottom: 10px;
}
.img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.mmov{
    right: 25px;
}
.box{
    width: 100%;
    height: 90px;
}
.keep{
   width: 90%;
}
.ttoopp{
    margin-top: 70px;
}
</style>