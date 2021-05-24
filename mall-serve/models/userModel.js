/*
 * @Author: 鲁遥
 * @Date: 2021-05-06 21:39:29
 * @LastEditTime: 2021-05-16 14:29:45
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall/mall-serve/models/userModel.js
 */

const mongoose = require('mongoose')
let Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: String,
    name: String,
    age: String,
    sex: String,
    phone: String,
    emall: String,
    passWord: String,
    birthday: String
})

var userModel = mongoose.model('myusers', userSchema);

module.exports = userModel

