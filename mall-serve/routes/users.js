/*
 * @Author: 鲁遥
 * @Date: 2021-05-06 18:23:48
 * @LastEditTime: 2021-06-13 15:09:10
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall-serve/routes/users.js
 */
const router = require('koa-router')()
const UserController = require('./../controller/user')

router.prefix('/user')

router.get('/', UserController.userlist)
router.post('/loginAndRegister', UserController.loginAndRegister)

module.exports = router
