/*
 * @Author: 鲁遥
 * @Date: 2021-05-08 15:26:56
 * @LastEditTime: 2021-05-11 20:52:12
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-h5/src/main.ts
 */
import Vant from 'vant';
import 'vant/lib/index.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import "./assets/css/vant.theme.less"


createApp(App).use(Vant).use(router).mount('#app')
