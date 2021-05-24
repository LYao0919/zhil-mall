/*
 * @Author: 鲁遥
 * @Date: 2021-05-07 22:49:24
 * @LastEditTime: 2021-05-24 20:27:27
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall/mall-serve/routes/goods.js
 */


const router = require('koa-router')()

const goodsController = require('../controller/goods');


router.prefix('/goods');

router.post('/list', goodsController.goods)
router.get('/home', goodsController.getHome)
router.post('/detail', goodsController.goodsDetail)
router.post('/search', goodsController.search)
// router.post('/detail', () => {
//     console.log(111114444)
// })

module.exports = router