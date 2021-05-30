/*
 * @Author: 鲁遥
 * @Date: 2021-05-30 20:05:51
 * @LastEditTime: 2021-05-30 21:50:45
 * @LastEditors: your name
 * @Description:
 * @FilePath: /zhil-mall/mall-serve/models/idsModel.js
 */

let mongoose = require('mongoose')
let Schema = mongoose.Schema;

const idsSchema = new Schema({
    name: String,
    id: {
        default: 10000,
        type: Number
    }
})

const idsModel = mongoose.model('ids', idsSchema)
module.exports = idsModel;
