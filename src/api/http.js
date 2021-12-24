import axios from 'axios';
// import qs from 'qs';

/**
 * 根据环境变量区分接口的默认地址
 * 
 * 
 */
switch (process.env.NODE_ENV) {
  case "pro":
    axios.defaults.baseURL = 'https://agric.lo3.cn';
    break;
  case "dev":
    axios.defaults.baseURL = 'http://192.168.2.37:6777';
    break;
  default:
    axios.defaults.baseURL = 'https://agric.lo3.cn';
}

/**
 * 设置超时时间
 * 设置CORS跨域是否允许携带凭证
 */
// axios.defaults.timeout = 10000;
// axios.defaults.withCredentials = true;

/**
 * 设置请求传递数据的格式
 * x-www-form-urlencoded  xxxx=xxx&xxx=xxx
 */
// axios.defaults.headers['Content-Type'] = 'applicaion/x-www-form-urlencoded';
// axios.defaults.transformRequest = data => qs.stringify(data);

/**
 * 设置请求拦截器
 * 客户端发送请求 --> [请求拦截器] --> 服务器
 * TOKEN校验 ：接收服务器返回token, 存储到Vuex / 本地存储中
 * 每一次向服务器发请求，我们应该把token带上
 */
// axios.interceptors.request.use(config =>{
//   // 携带上token
//   let token = localStorage.getItem('token')
//   token && (config.headers.Authorization = token);
//   return config;
// },error => {
//   return Promise.reject(error);
// });

/**
 * 响应拦截器
 *  服务器返回信息 -> [响应拦截器] -> 客户端JS获取信息
 */
// axios.defaults.validateStatus = status => {
//   // 自定义响应成功的HTTP状态码
//   return /^(2|3)\d{2}$/.test(status)
// }
// axios.interceptors.response.use(response => {
//   return response.data
// },error => {
//   let {
//     response
//   }  = error;
//   if (response) {
//     //=> 服务器最起码返回结果了
//     switch(response.status) {
//       case 401: // 当前 (一般是未登录) 可以结合UI
//         break;
//       case 403: // 服务器已理解请求， token过期
//         break;
//       case 404: // 找不到页面 接口不存在
//         break;
//     }
//   } else{
//     //=> 服务器连接都没有返回
//     if(!window.navigator.onLine){
//       // 断网处理： 可以跳转到断网页面
//       return
//     }
//     return Promise.reject(error)
//   }
// })

export default axios;