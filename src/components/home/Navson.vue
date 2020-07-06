<template>
 <div>
      <div class="box flex al-center ju-center pos-rel">
          <div class=" fz-12 pos-abs city flex al-center" @click="cityy">
            <div v-if="city===''" class="box-o flex al-center ju-center">定位中···</div>
            <div v-else class="box-o flex al-center ju-center">{{city}}</div>
              <div class="move pos-abs">▼</div>
              </div> 
 <van-search
 
  show-action
  class="ipt pos-rel"
  placeholder="请输入搜索关键词"
  @focus="vvs"
  v-model="value"
  @input="ipt"
  background="rgb(242,242,242)"
>
  <template #action>
     <div @click="cancel" v-if="moon==='0'">取消</div>
    <div v-else>搜索</div>
  </template>
</van-search>
      </div>

      <div v-if="moon === '0'">
        <div class="pos">
          <div v-if="value!==''">
            <div v-for="item in text" :key="item.id">
             <div class="van-hairline--bottom">
             <div class=" fz-14 m-l2">
               <a @click="goto(item,value)">
              <span>
                {{
                item.name.slice(
                0,
                item.name.toLowerCase().indexOf(value.toLowerCase())
                )
                }}
              </span>
              <span class="text-k" style="color:#fe1706">
                {{
                item.name.slice(
                item.name.toLowerCase().indexOf(value.toLowerCase()),
                item.name.toLowerCase().indexOf(value.toLowerCase()) +
                value.length
                )
                }}
              </span>
              <span>
                {{
                item.name.substr(
                item.name.toLowerCase().indexOf(value.toLowerCase()) +
                value.length
                )
                }}
              </span>
            </a>
             </div>
             </div>
           </div>
          </div>
           <div v-else-if="value===''">
                 <div class=" m-l1 pos-rel flex-d ju-center">
                         浏览历史 
                   <div class=" pos-abs rigth" @click="delte"><van-icon name="delete"  /></div>
                   </div>
                 <div class="box1 flex m-l2">
                   <div v-for="(item,index) in Atext" :key="index" > 
                     <div class=" m-l2 m-t1" >
          <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" class=" pos-rel">
                      <div @click="again(item)">{{item}}</div> 
                   <div @click="del(item,index)" class=" pos-abs moveq"><van-icon name="cross"  size="12px"/></div> 
                     </van-button> 
                       </div>               
                 </div>
                   </div>   
           </div>
            <div v-if="value!=='' && text.length===0">
              没有
           </div>
          </div>
      </div>
 </div>
</template>

<script>
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
     city:'',
     value:'',
      falg:'',
      text:[],
      moon:'',
      Atext:[]


     }
   },
   methods: {
   cityy(){
       this.$router.push('/City')
   },
   vvs(){
       this.falg = '0'
       this.$emit('vvs',this.falg)
       this.moon = '0'
      
   },
   ipt(){
      this.$api.Search({value:this.value})
     .then(res=>{
       this.text=res.data.list
       console.log(this.text.length);
     })
     .catch(err=>{
       console.log(err);
     })
   },
  again(item){
    this.value = item
    this.ipt()
},
   goto(item){
      this.$router.push({path:'/Details',query:{id:item.id}})
      this.$utils.addIpValue(this.value)
   },

   cancel(){
     this.falg = '1'
      this.$emit('vvs',this.falg)
      this.moon = '1'
      this.value = ''
   },
   del(item,index){
     this.Atext.splice(index,1)
     localStorage.setItem('IpValue',JSON.stringify(this.Atext) )
   },
   delte(){
     this.Atext = []
     localStorage.setItem('IpValue',JSON.stringify(this.Atext) )
   }
   },
   mounted() {
     if(localStorage.Manual){
        this.city = JSON.parse(localStorage.getItem('Manual'))
     }
     else{
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
     }
     let Atext = JSON.parse(localStorage.getItem('IpValue'))
    this.Atext = uniqWith(Atext,isEqual)
 
  console.log(this.city);
  
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.rigth{
  right: 20px;
}
.box1{
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.moveq{
  right: 0;
}
.text-k{
  margin: -4px;
  padding: 0;
}
.van-hairline--bottom{
  padding: 10px 0;
}
.pos{
  padding-top: 50px;
}
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
.box-o{
  width: 60px;
  height: 25px;
 
}
.city{
    left: 8px;
}
.move{
   left: 58px;
}
.van-search__content{
    background: white;
}

</style>