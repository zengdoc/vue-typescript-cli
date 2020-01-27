import Axios from 'axios';

const request = Axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 3000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
});

// 添加请求拦截器
request.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default request;
