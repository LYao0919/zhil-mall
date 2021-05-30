/*
 * @Author: 鲁遥
 * @Date: 2021-05-06 21:43:51
 * @LastEditTime: 2021-05-30 22:27:38
 * @LastEditors: your name
 * @Description:
 * @FilePath: /zhil-mall/mall-serve/controller/user.js
 */


const userModel = require('./../models/userModel')
const idsModel = require('./../models/idsModel');
const { resolve, reject } = require('core-js/fn/promise');

class UserController {
    async userlist(ctx) {
        try {
            let data = await userModel.find();
            ctx.body = {
                code: 0,
                msg: 'SUCCESS',
                data: data
            }
        } catch (err) {
            ctx.throw(err);
        }
    }

    async userRegister(ctx) {
        try {
            let userid = new Promise((resolve, reject) => {
                idsModel.findOneAndUpdate({ "name": "initId" }, { $inc: { "id": 1 } }, { upsert: true, new: true }).exec(function (err, res) {
                    resolve(res.id)
                })
            })
            let data = await userModel.create(Object.assign({}, ctx.request.body, { userId: await userid }))
            ctx.body = {
                code: 0,
                msg: 'SUCCESS',
                data: data
            }
        } catch (error) {
            ctx.throw(error);
        }
    }
}


module.exports = new UserController()



