const user = require('express').Router();

// 创建用户
user.post('/', require('./actions/user/create'));
module.exports = user;