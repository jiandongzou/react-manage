import axios from 'axios';
import { useMessage } from '@/hooks/message'
const { uesErrorMsg} = useMessage()
// create an axios instance
const service = axios.create({
 // baseUrl: import.meta.env.VITE_APP_BASE_URL,
  timeout: 80000,
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // Store 必须在拦截器内部导入，在外部导入会显示 Pinia 未初始化
    // 设置请求头部 Authorization
    // const token=localStorage.getItem("token")
    // if (token) {
    //   config.headers['Authorization'] = 'Bearer ' + token;
    // }
    config.headers['Content-Type'] = 'application/json'
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const { code, message } = response.data;
    // 如果过期则退出登录
    if (code === 401) {
        uesErrorMsg('Token 已过期, 请重新登陆')
       window.location.href="/login"
    }
     return response.data;
  } ,(error) => {
    Promise.reject(error);
  }
);

export default service;