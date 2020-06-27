<template>
  <div class="box-three">
    <div class=" flex ju-center">
      <div class="box-mini flex al-center">
        <div v-for="(item,index) in category" :key="index">
          <div>
            <img :src="item.image" alt class="img" @click="add(item,index)" />
            <div class="fz-12">{{item.mallCategoryName}}</div>
          </div>
        </div>
      </div>
    </div>
      <div><img src="http://images.baixingliangfan.cn/advertesPicture/20180404/20180404085441_850.gif" alt="" class="img-end"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id:''
    };
  },
  methods: {
    add(item,index){
      this.$router.push({path:'/Classification',query:{index:index}})
    }
  },
  mounted() {
   
  },
  watch: {},
  computed: {
    category() {
      return this.$store.state.category;
    },
  }
};
</script>

<style scoped lang='scss'>
.box-three {
  width: 100%;
  background: rgb(238, 238, 238);
}
.box-mini {
  width: 94%;
  height: 90px;
  background: white;
  margin: 20px 0;
  border-radius: 10px;
  justify-content: space-around;
}
.img {
  width: 50px;
  height: 50px;
}
.img-end{
    width: 100%;
    height: 30px;
}
</style>