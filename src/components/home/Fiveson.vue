<template>
  <div>
    <div>{{floorName}}</div>
    <div class="flex">
      <div v-for="item in floor.slice(0,1)" :key="item.id">
        <img :src="item.image" alt class="img" />
      </div>
      <div>
        <div v-for="item in floor.slice(1,2)" :key="item.id">
          <img :src="item.image" alt class="img1" />
        </div>
        <div v-for="item in floor.slice(2,3)" :key="item.id">
          <img :src="item.image" alt class="img1" />
        </div>
      </div>
    </div>
    <div class="flex">
         <div v-for="item in floor.slice(3,4)" :key="item.id">
          <img :src="item.image" alt class="img1" />
        </div>
        <div v-for="item in floor.slice(4,5)" :key="item.id">
          <img :src="item.image" alt class="img1" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floorName: {
      type: String
    },
    floor: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 188px;
  height: 200px;
}
.img1 {
  width: 188px;
  height: 100px;
  border: 0.5px solid rgb(241,241,241);
}
</style>d