/*
 * @Author: 鲁遥
 * @Date: 2021-05-06 21:43:51
 * @LastEditTime: 2021-06-14 16:42:42
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall-serve/controller/user.js
 */

const jwt = require('jsonwebtoken')
const { SECRET } = require('./../utils/secret')

const userModel = require('./../models/userModel')
const idsModel = require('./../models/idsModel');

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

    async loginAndRegister(ctx) {
        let reqData = ctx.request.body;
        let hasUser = await userModel.findOne({ tel: reqData.tel })

        if (reqData.type == 'register') { //注册
            try {
                let userid = new Promise((resolve, reject) => {
                    idsModel.findOneAndUpdate({ "name": "initId" }, { $inc: { "id": 1 } }, { upsert: true, new: true }).exec(function (err, res) {
                        resolve(res.id)
                    })
                })
                if (hasUser) {
                    ctx.body = {
                        code: 400,
                        msg: '当前用户已存在！',
                    }
                } else {
                    let data = await userModel.create(Object.assign({}, reqData, { userId: await userid }))
                    ctx.body = {
                        code: 0,
                        msg: 'SUCCESS',
                        data: data,
                        token: jwt.sign(
                            data.toJSON(),  // 加密userToken
                            SECRET,
                            { expiresIn: '1h' }
                        )
                    }
                }
            } catch (error) {
                ctx.throw(error);
            }
        } else if (reqData.type == 'login') { //登陆
            if (!hasUser) {
                ctx.body = {
                    code: 400,
                    msg: '此用户不存在',
                }
            }
            if (hasUser.pwd == reqData.pwd && hasUser.tel == reqData.tel) {
                ctx.body = {
                    code: 0,
                    msg: 'SUCCESS  登陆成功',
                    data: hasUser,
                    token: jwt.sign(
                        hasUser.toJSON(),  // 加密userToken
                        SECRET,
                        { expiresIn: '1h' }
                    )
                }
            } else {
                ctx.body = {
                    code: 400,
                    msg: '手机号或密码错误',
                }
            }
        }
    }
}


module.exports = new UserController()



