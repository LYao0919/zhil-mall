/*
 * @Author: 鲁遥
 * @Date: 2021-05-06 20:39:54
 * @LastEditTime: 2021-05-07 21:00:13
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall-serve/db/init.js
 */

let mongoose = require('mongoose');
let url = 'mongodb://127.0.0.1:27017/Y-mall'

module.exports = {
    connect() {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(res => {
                console.log('连接成功');
            }).catch(err => {
                console.log('连接失败');

            })
    }
}

