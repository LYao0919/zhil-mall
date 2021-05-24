/*
 * @Author: 鲁遥
 * @Date: 2021-05-06 18:23:48
 * @LastEditTime: 2021-05-24 20:19:02
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-serve/routes/users.js
 */
const router = require('koa-router')()
const UserController = require('./../controller/user')

router.prefix('/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

router.get('/', UserController.userlist)
// router.post('/like', UserController.userLike)

module.exports = router
