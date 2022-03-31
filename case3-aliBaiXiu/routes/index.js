 module.exports = app =>{
    // app.use('/users',require('./user'));

    // 其他
	// 用户登录
	app.post('/login', require('./actions/other/login'));
}