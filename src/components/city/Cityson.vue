<template>
  <div>
    <van-index-bar class="fz-color-AZ">
        <div v-for="(item,index) in msg"  :key="index">
        <van-index-anchor :index='item'  />
    <van-cell  v-for="items in datas[item]" @click="goto(items)" :key="items.id"
    :title="items.name"
    />
        </div>
    </van-index-bar>
  </div>
</template>

<script>
import city from "../../lib/city";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      city: city,
      msg:'',
        datas: [],

     
    };
  },
  methods: {
         
      goto(items){
          console.log(items);
      this.$router.push('/')
      localStorage.setItem('Manual',JSON.stringify(items))
    },
    
  },
  mounted() {
      this.datas=this.city.data.cities;
    let keys = Object.keys(this.city.data.cities);
    this.msg = keys;
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>


</style>