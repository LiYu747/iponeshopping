<template>
 <div>
      <div class="box flex al-center ju-center pos-rel">
          <div class=" fz-14 pos-abs city flex al-center">{{city}}
              <div class="move pos-abs" @click="cityy">▼</div>
              </div> 
 <van-search
 
  show-action
  class="ipt pos-rel"
  placeholder="请输入搜索关键词"

  background="rgb(242,242,242)"
>
  <template #action>
    <div >搜索</div>
  </template>
</van-search>
      </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
     city:'',
     value:'',

     }
   },
   methods: {
   cityy(){
       this.$router.push('/City')
   }
   },
   mounted() {
      let _this = this
AMap.plugin('AMap.Geolocation', function() {
  var geolocation = new AMap.Geolocation({
    // 是否使用高精度定位，默认：true
    enableHighAccuracy: true,
    // 设置定位超时时间，默认：无穷大
    timeout: 10000,
    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
    buttonOffset: new AMap.Pixel(10, 20),
    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    zoomToAccuracy: true,     
    //  定位按钮的排放位置,  RB表示右下
    buttonPosition: 'RB'
  })

  geolocation.getCurrentPosition()
  AMap.event.addListener(geolocation, 'complete', onComplete)
  AMap.event.addListener(geolocation, 'error', onError)

  function onComplete (data) {
    // data是具体的定位信息
    _this.city = data.addressComponent.city
    _this.$store.commit('setCity',data.addressComponent.city)
  }

  function onError (data) {
    // 定位出错
  }
})

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    width: 100%;
    height: 40px;
    background: rgb(242,242,242);
    position: fixed;
    z-index: 9999;
}
.ipt{
  height: 20px;
  width: 280px;
 left: 30px;

}
.city{
    left: 20px;
}
.move{
   left: 45px;
}
.van-search__content{
    background: white;
}

</style>