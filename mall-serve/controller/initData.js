/*
 * @Author: 鲁遥
 * @Date: 2021-05-07 21:12:30
 * @LastEditTime: 2021-05-10 16:55:02
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall/mall-serve/controller/initData.js
 */

const fs = require('fs');
const path = require('path');
const goodsModel = require('../models/goodsModel')
const recommendModel = require('./../models/recommendModel')


class InitDataController {
    async initData(ctx) {
        let goodsData = await goodsModel.find();
        let recommendData = await recommendModel.find();
        if (!goodsData.length) {
            fs.readFile(path.resolve(__dirname, './../data/goods2.json'), 'utf8', async (err, data) => {
                data = JSON.parse(data);
                try {
                    let _data = await goodsModel.insertMany(data)
                    console.log('导入数据成功');
                } catch (error) {
                    throw error
                }
            })
        } else {
            console.log('数据已经存在');
        }


        if (!recommendData.length) {
            fs.readFile(path.resolve(__dirname, './../data/goods.json'), 'utf8', async (err, data) => {
                data = JSON.parse(data);
                try {
                    let _data = await recommendModel.insertMany(data)
                    console.log('导入首页数据成功');
                } catch (error) {
                    throw error
                }
            })
        }

        ctx.body = {
            code: 0,
            msg: 'SUCCESS',
        }
    }
}

module.exports = new InitDataController()
