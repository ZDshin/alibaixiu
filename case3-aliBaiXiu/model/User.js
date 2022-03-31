const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    nickName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'normal',
        enum: ['admin', 'normal']
    },
    avatar: {
        type: String,
        default: null
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Number,
        required: true,
        default: 1
    }
}, {
    versionKey: false
});

const User = mongoose.model('User', userSchema);
// User.create({
//         nickName: 'xuan',
//         email: '492070063@qq.com',
//         password: 'woshi1234',
//         role: 'admin',
//         avatar: '',
//         createTime: '',
//         status: '1'
//     })
//     .then(() => {
//         console.log("添加成功")
//     }).catch(() => {
//         console.log("添加失败");
//     });
module.exports = {
    User
};