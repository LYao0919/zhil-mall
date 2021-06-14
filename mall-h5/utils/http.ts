/*
 * @Author: 鲁遥
 * @Date: 2021-05-10 15:47:18
 * @LastEditTime: 2021-06-14 20:18:48
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall-h5/utils/http.ts
 */
import router from './../src/router';

import axios from "axios";
import { Toast } from 'vant';

// let lang = navigator.language;//常规浏览器语言和IE浏览器
const token = localStorage.getItem('token');
// config.headers.common['Authorization'] = 'Bearer ' + token;
const headerObj = {
    // "Content-Type": "application/json;charset=UTF-8",
    'Authorization': 'Bearer ' + token,
    // 'lang': lang,
};

// 创建一个 axios 实例
const service = axios.create({
    // baseURL: process.env.VUE_APP_API,
    timeout: 1000 * 30,
    // withCredentials: true,
    headers: headerObj
});

//请求拦截
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error.data, 'error.data');
        return Promise.reject(error.data);
    }
);

/**
 * 响应拦截
 */
service.interceptors.response.use(response => {
    // 对响应数据做些事
    console.log(response, 222);

    return Promise.resolve(response.data);
}, error => {
    console.log(error.response.status, 111);

    if (error && error.response) {
        switch (error.response.status) {
            case 400: console.log('错误请求'); break;
            case 401:
                localStorage.removeItem('user');
                Toast.fail(error.response.data.msg)
                router.push({ name: "User" })
                // store.dispatch('deleteUserToken');
                break;
            case 403: console.log('拒绝访问'); break;
            case 404: console.log('请求错误,未找到该资源'); break;
            case 405: console.log('请求方法未允许'); break;
            case 408: console.log('请求超时'); break;
            case 500: console.log('服务器端出错'); break;
            case 501: console.log('网络未实现'); break;
            case 502: console.log('网络错误'); break;
            case 503: console.log('服务不可用'); break;
            case 504: console.log('网络超时'); break;
            case 505: console.log('http 版本不支持该请求'); break;
            default: console.log(`连接错误${error.response.status}`);
        }
    } else {
        console.log('连接到服务器失败');
    }
    return Promise.reject(error);
});
export default service;
