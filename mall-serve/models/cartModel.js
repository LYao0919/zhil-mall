/*
 * @Author: 鲁遥
 * @Date: 2021-06-14 15:09:14
 * @LastEditTime: 2021-06-14 17:33:01
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall-serve/models/cartModel.js
 */

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: String,
    carts: [],
})

const cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel;