/*
 * @Author: 鲁遥
 * @Date: 2021-05-06 21:39:29
 * @LastEditTime: 2021-05-30 22:23:33
 * @LastEditors: your name
 * @Description:
 * @FilePath: /zhil-mall/mall-serve/models/userModel.js
 */

const mongoose = require('mongoose')
let Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: Number,
    name: String,
    age: String,
    sex: String,
    tel: String,
    emall: String,
    pwd: String,
    birthday: String
})

var userModel = mongoose.model('users', userSchema);

module.exports = userModel

