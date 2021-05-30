/*
 * @Author: 鲁遥
 * @Date: 2021-05-07 21:11:15
 * @LastEditTime: 2021-05-30 20:15:30
 * @LastEditors: your name
 * @Description:
 * @FilePath: /zhil-mall/mall-serve/models/goodsModel.js
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
module.exports = goodsModel;

