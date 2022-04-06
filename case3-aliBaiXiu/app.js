const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
var session = require('express-session');
const formidableMiddleware = require('express-formidable');
// mongoose.connect('mongodb://xuan:root@localhost:27017/alibaixiu', {
mongoose.connect('mongodb://localhost:27017/alibaixiu', {
    useNewUrlParser: true
}).then(() => {
    console.log("数据库连接成功")
})
const app = express();
// 静态页面实现
app.use(express.static(path.join(__dirname, 'public')));

// const todoRouter = require('./routes/user');
// app.use('/user', todoRouter);

// 处理post请求参数
// app.use(bodyParser.json());
//session配置
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

// 处理post参数
app.use(formidableMiddleware({
    // 文件上传目录
    uploadDir: path.join(__dirname, 'public', 'uploads'),
    // 最大上传文件为2M
    maxFileSize: 2 * 1024 * 1024,
    // 保留文件扩展名
    keepExtensions: true
}));

// 路由
require('./routes')(app);
app.listen(3000, () => {
    console.log("服务器成功启动...");
})