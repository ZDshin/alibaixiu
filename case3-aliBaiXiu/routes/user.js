const user = require('express').Router();

// 创建用户
user.post('/', require('./actions/user/create'));

// 查询所有用户信息
user.get('/', require('./actions/user/find'));
// 根据用户id修改用户信息
user.put('/:id', require('./actions/user/findByIdAndUpdate'));

// 根据用户id查询用户信息
user.get('/:id', require('./actions/user/findById'));


module.exports = user;