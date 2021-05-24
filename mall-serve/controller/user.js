/*
 * @Author: 鲁遥
 * @Date: 2021-05-06 21:43:51
 * @LastEditTime: 2021-05-07 21:12:44
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall-serve/controller/user.js
 */

const userModel = require('./../models/userModel')

class UserController {
    async userlist(ctx) {
        try {
            let data = await userModel.find();
            console.log(data, 'UserController data');
            ctx.body = {
                code: 0,
                msg: 'SUCCESS',
                data: data
            }
        } catch (err) {
            ctx.throw(err);
        }
    }
}


module.exports = new UserController()



