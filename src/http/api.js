import service from './index'
export default {
    // 登录
    login({nickname,password,verify}){
        return service.post('/login',{
          nickname: nickname,
          password:password,
          verify:verify,
        })
    },
    // 注册
    register({nickname,password,verify}){
      return service.post('/register',{
        nickname,
        password,
        verify,
      })
    },
    // 验证码
    Verification(){
      return service.get('/verify')
    },
    // 搜索
    search(){
        return service.get('/search')
    },
    // 首页
    homeAll(){
      return service.get('/recommend')
    },
    //  获取用户信息
    UserInformation(){
      return service.post('/queryUser')
    },
    // 修改用户信息
    Preservation({username,nickname,gender}){
      return service.post('/saveUser',{
        username:username,
        nickname:nickname,
        gender:gender
      })
    },
    // 详情页
    Details(id){
      return service.get(`/goods/one?id=${id}`)
    },
    // 分类查询
    ClassificationQuery(id){
      return service.get(`/classification?mallSubId=${id}`)
    },
    // 加入购物车
    AddToCart(id){
      return service.post('/addShop',{id})
    },
    // 查询获取购物车数据
    GetCard(){
      return service.post('/getCard')
    },
  //  删除
  DeleteShop(idAss){
    return service.post('/deleteShop',idAss)
   },
  //  购物车加减商品
  EditCart({count,id,mallPrice}){
    return service.post('/editCart',{
      count:count,
      id:id,
      mallPrice:mallPrice
    })
  },
  // 查询默认收货地址
  GetDefaultAddress(id){
    return service.get('/getDefaultAddress')
   },
}