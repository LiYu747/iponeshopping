<template>
 <div>
        <div v-for="item in arr" :key="item.id">
               {{item.name}}
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
   arr:[]
     }
   },
   methods: {

   },
   mounted() {
   this.$api.Collection()
   .then(res=>{
    console.log(res);
    this.arr = res.data.list
   })
   .catch(err=>{

   })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>