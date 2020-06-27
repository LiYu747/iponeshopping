<template>
  <div>
    <van-index-bar class="fz-color-AZ">
        <div v-for="(item,index) in msg" :key="index">
        <van-index-anchor :index='item' />
    <van-cell  v-for="items in datas[item]" :key="items.id"
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