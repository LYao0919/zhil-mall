/*
 * @Author: 鲁遥
 * @Date: 2021-05-07 21:11:15
 * @LastEditTime: 2021-05-10 16:52:27
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall/mall-serve/models/goodsModel.js
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const goodSchema = new Schema({
    id: String,
    goods_serlal_number: String,
    shop_id: String,
    sub_id: String,
    name: String,
    orl_price: Number,
    present_price: Number,
    amount: Number,
    detail: String,
    image: String,
    create_time: String,
    update_time: String,
    image_path: String
})

const goodsModel = mongoose.model('goods', goodSchema);
module.exports = goodsModel

