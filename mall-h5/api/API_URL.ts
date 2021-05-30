/*
 * @Author: 鲁遥
 * @Date: 2021-05-10 15:52:59
 * @LastEditTime: 2021-05-30 19:26:21
 * @LastEditors: your name
 * @Description:
 * @FilePath: /zhil-mall/mall-h5/api/API_URL.ts
 */

import service from "./../utils/http";

// const API = import.meta.env.VITE_APP_API;

const API = 'http://localhost:3000';


export const apiUrl = {
    initData() {
        return service({
            url: `${API}/`,
            method: "get"
        });
    },
    getHome() {
        return service({
            url: `${API}/goods/home`,
            method: "get"
        });
    },
    getGoods(params: any) {
        return service({
            url: `${API}/goods/list`,
            data: params,
            method: "post",
        });
    },
    searchGoods(params: any) {
        return service({
            url: `${API}/goods/search`,
            data: params,
            method: "post",
        });
    },
    getGoodsDetail(params: any) {
        return service({
            url: `${API}/goods/detail`,
            data: params,
            method: "post",
        });
    },
    // 用户注册
    register(params) {
        return service({
            url: `${API}/user/register`,
            data: params,
            method: "post",
        });
    }
}