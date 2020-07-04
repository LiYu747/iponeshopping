<template>
<div class="back flex al-center ju-center">
<div class="box rgba">
       <div class="text">登录 / 注册</div>
        <van-field 
        v-model="username"  
        placeholder="USERNAME"
           required 
        class="rgba m-t3"/>
  <van-field
   v-model="password" 
   type="password" 
     required
   placeholder="PASSWORD"
    class="rgba m-t3"/>
      <van-field  label="手机号码" placeholder="仅注册需要"  class="rgba m-t2"/>
    <van-field
  class="rgba m-t2"
  center
  clearable
  label="短信验证码"
  placeholder="仅注册需要"
>
  <template #button>
 <van-button type="primary" @click="countDown" class=" m-l2" size='small'>{{content}}</van-button>
  </template>
</van-field>
     
      <div class="flex al-center m-t2 mov">
          <div class=" fz-14">验证码</div>
        <van-field 
        class="toot rgba m-l1"
        v-model="verification"
          placeholder="请输入验证码" />
        <div v-html="code" @click="verif" class=" m-l2"></div>
         <van-cell-group/>
           
      </div>
      <div class=" m-t2 flex">
      <van-button type="primary" @click="log">登录</van-button>
      <div class=" m-l2"><van-button type="danger" @click="reg">注册</van-button></div> 
      </div>  
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
      username: '',
      password: '',
      verification:'',
      code:'',
     content:'发送验证码',
       totalTime: 60 ,
      canClick: true //添加canClick
     }
   },
   methods: {
   countDown() {
if (!this.canClick) return //改动的是这两行代码
this.canClick = false
this.content = this.totalTime + 's后重新发送'
let clock = window.setInterval(() => {
this.totalTime--
this.content = this.totalTime + 's后重新发送'
if (this.totalTime < 0) {
window.clearInterval(clock)
this.content = '重新发送验证码'
this.totalTime = 60
this.canClick = true //这里重新开启
}
},1000)
},
    verif(){
      this.$api.Verification()
   .then(res=>{
       this.code=res
     }
     )
     .catch(ree=>{
     })
    },
    reg(){
      this.$api.register({nickname:this.username,password:this.password,verify:this.verification})
    .then(res=>{
          if(res.code===200){
                 this.$dialog.alert({
          message: '注册成功',
    });
        }
     else if(res.code===-1){
             this.$dialog.alert({
          message: '用户名已存在',
    });
     }
        else if(res.code===-2){
             this.$dialog.alert({
          message: '验证码错误',
    });
     }
     else{
                  this.$dialog.alert({
          message: '注册失败',
    });
     }
    })
    .catch(ree=>{
    })
    },
    log(){
         this.$api.login({nickname:this.username,password:this.password,verify:this.verification})
    .then(res=>{
       if(res.code===200){
                 this.$dialog.alert({
          message: '登录成功',
    });
     localStorage.setItem('username',this.username)
     this.$router.push('/')
        }
     else if(res.code===-1){
             this.$dialog.alert({
          message: '用户名或密码错误',
    });
     }
        else if(res.code===-2){
             this.$dialog.alert({
          message: '验证码错误',
    });
     }
     else{
                  this.$dialog.alert({
          message: '登录失败',
    });
     }
    })
    .catch(ree=>{
    })
    }
   },
   mounted() {
    this.verif()

    
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.back{
   background: url('../img/u=1798350679,1175656646&fm=26&gp=0.jpg');
   width: 100%;
   height: 100vh;
}
.text{
    font-size: 22px;
}
.box{
    width: 300px;
    height: 450px;
    padding: 20px;
    margin-top: 20px;
  background: rgba(255,255,255,0.8);
}
.toot{
    width: 40%;
}
.toot1{
    width: 70%;
}
.mov{
margin-left: 5px;
}
.rgba{
   background: rgba(255,255,255,0.7);
}
</style>