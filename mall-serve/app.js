/*
 * @Author: 鲁遥
 * @Date: 2021-05-06 18:23:48
 * @LastEditTime: 2021-06-14 16:01:31
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall-serve/app.js
 */
const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const koajwt = require('koa-jwt')


const index = require('./routes/index')
const users = require('./routes/users')
const goods = require('./routes/goods')
const carts = require('./routes/carts')

const { SECRET } = require('./utils/secret')

const { connect } = require('./db/init')
connect();


// error handler
// app.use(koajwt({
//   secret: SECRET
// }).unless({
//   path: [/\/user\/loginAndRegister/, /\/goods/] // 哪一个接口忽略jwt验证
// }))


onerror(app)

// middlewares
app.use(cors({
  origin: function (ctx) { //设置允许来自指定域名请求
    // if (ctx.url === '/test') {
    //     return '*'; // 允许来自所有域名请求
    // }
    // return 'http://localhost:4000'; //只允许http://localhost:8080这个域名的请求
    return "*"
  },
  maxAge: 5, //指定本次预检请求的有效期，单位为秒。
  credentials: true, //是否允许发送Cookie
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段

}))
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))



// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes

app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(goods.routes(), goods.allowedMethods())
app.use(carts.routes(), carts.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
