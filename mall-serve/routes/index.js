/*
 * @Author: 鲁遥
 * @Date: 2021-05-06 18:23:48
 * @LastEditTime: 2021-05-16 14:14:47
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-serve/routes/index.js
 */
const router = require('koa-router')();
const initDataController = require('./../controller/initData')

router.get('/', initDataController.initData)

module.exports = router
