/*
 * @Author: 鲁遥
 * @Date: 2021-06-14 15:08:53
 * @LastEditTime: 2021-06-14 18:01:56
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall-serve/controller/cart.js
 */

const cartModel = require('./../models/cartModel');

class CartController {
    async add(ctx) {
        try {
            let { id } = ctx.request.body
            let hasCart = await cartModel.findOne({ userId: ctx.userInfo.userId })
            if (!hasCart) {
                cartModel.create({ userId: ctx.userInfo.userId, carts: [{ id: id, cartNum: 1 }] })
            } else {
                let newCarts;
                let ids = hasCart.carts.map(item => {
                    return item.id
                })
                if (!ids.includes(id)) {
                    newCarts = [...hasCart.carts, { id: id, cartNum: 1 }];
                } else {
                    let currIndex = hasCart.carts.findIndex(item => {
                        return item.id == id
                    })
                    let currItem = hasCart.carts[currIndex]
                    currItem.cartNum = currItem.cartNum + 1;
                    newCarts = [...hasCart.carts];
                }
                await cartModel.updateOne({ userId: ctx.userInfo.userId }, { $set: { carts: newCarts } })
            }
            ctx.body = {
                code: 0,
                msg: '加入购购物车成功',
            }

        } catch (error) {

        }
    }
}

module.exports = new CartController