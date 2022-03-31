const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());

// 路由
require('./routes')(app);
app.listen(3000, () => {
    console.log("服务器成功启动...");
})