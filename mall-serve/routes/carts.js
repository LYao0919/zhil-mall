/*
 * @Author: 鲁遥
 * @Date: 2021-06-14 15:06:57
 * @LastEditTime: 2021-06-14 15:58:09
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall-serve/routes/carts.js
 */
const router = require('koa-router')()
const checkUserStat = require('./../middleware/checkUserStat')

const cartController = require('../controller/cart');


router.prefix('/cart');

router.post('/add', checkUserStat, cartController.add)

module.exports = router