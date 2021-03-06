const user = require('express').Router();

// 创建用户
user.post('/', require('./actions/user/create'));

// 查询所有用户信息
user.get('/', require('./actions/user/find'));
// 修改密码,// put类型慎用 当路由中有多个put请求时put的先后顺序可能会影响程序执行
user.put('/password', require('./actions/user/password'));
// 根据用户id修改用户信息
user.put('/:id', require('./actions/user/findByIdAndUpdate'));

// 根据用户id查询用户信息
user.get('/:id', require('./actions/user/findById'));

// 根据用户id删除用户
user.delete('/:id', require('./actions/user/findByIdAndDelete'));

module.exports = user;