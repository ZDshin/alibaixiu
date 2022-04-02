 module.exports = app => {
     app.use('/users', require('./user'));

     // 其他
     // 用户登录
     app.post('/login', require('./actions/other/login'));
     app.get('/login/status', require('./actions/other/loginStatus'));
     app.post('/logout', require('./actions/other/logout'));
     app.post('/upload', require('./actions/other/upload'));
 }