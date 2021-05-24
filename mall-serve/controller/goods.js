/*
 * @Author: 鲁遥
 * @Date: 2021-05-07 22:51:46
 * @LastEditTime: 2021-05-24 20:50:02
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall/mall-serve/controller/goods.js
 */

// const goodsModel = require('./../models/goodsModel')
const goodsModel = require('../models/goodsModel');
const recommendModel = require('./../models/recommendModel')

class GoodsController {
    async getHome(ctx) {
        try {
            let data = await recommendModel.find()
            ctx.body = {
                code: 0,
                msg: 'SUCCESS',
                data: data
            }

        } catch (error) {

            ctx.throw(error)
        }
    }
    async goods(ctx) {
        try {
            let postData = ctx.request.body;
            let data = await goodsModel.find({ sub_id: postData.mallSubId });
            ctx.body = {
                code: 0,
                msg: 'SUCCESS',
                data: data
            }
        } catch (error) {
            ctx.throw(error)
        }
    }
    async goodsDetail(ctx) {
        try {
            let postData = ctx.request.body;
            let data = await goodsModel.find({ id: postData.id });
            ctx.body = {
                code: 0,
                msg: 'SUCCESS',
                data: data[0]
            }
        } catch (error) {
            ctx.throw(error)
        }
    }

    async search(ctx) {
        try {
            let { name } = ctx.request.body;
            console.log(name);
            const reg = new RegExp(name, 'i');
            let data = await goodsModel.find({
                $or: [ //多条件，数组
                    { name: { $regex: reg } }
                ]
            })
            ctx.body = {
                code: 0,
                msg: 'SUCCESS',
                data: data
            }

        } catch (error) {
            ctx.throw(error)
        }
    }

    async getHome111(ctx) {
        try {
            let { pageSize, current } = ctx.request.query;
            let skip = (Number(current) - 1) * Number(pageSize)
            let data = await goodsModel.find().skip(skip).limit(Number(pageSize))

            ctx.body = {
                code: 0,
                msg: 'SUCCESS',
                data: data
            }


        } catch (error) {
            console.log(333);
            ctx.throw(error)
        }
    }
}

module.exports = new GoodsController