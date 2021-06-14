/*
 * @Author: 鲁遥
 * @Date: 2021-06-14 15:44:08
 * @LastEditTime: 2021-06-14 16:06:30
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall-serve/utils/jwt.js
 */
const jwt = require('jsonwebtoken');
const { SECRET } = require('./secret')
/**
 * 创建 Token
 */
const _createToken = (userInfo) => {
    // JWT 格式 token | 有效时间 1 小时
    return jwt.sign({ userInfo }, SECRET, { expiresIn: '1h' });
};



/**
 * 验证 token 结果 (验证 secret 和 检查有效期 exp)
 */
const _verify = (token) => {
    return jwt.verify(token, SECRET, (error, decoded) => {
        if (error) {
            switch (error.name) {
                // token 过期 eg: { code: 401, name: 'TokenExpiredError', message: 'jwt expired' } | 401 token 过期
                case 'TokenExpiredError':
                    return { code: 401, name: error.name, error_msg: error.message }
                // token 错误
                case 'JsonWebTokenError':
                    return { code: 400, name: error.name, error_msg: error.message };
                default:
                    return error;
            }
        } else {
            // 验证成功 eg：{ userId: '5cd7b5159ea7ac253029178d', iat: 1557640469, exp: 1557644069 } | iat（创建的时间戳），exp（到期时间戳）
            return { code: 200, ...decoded };
        }
    });
};

module.exports = {
    _createToken,
    _verify
};