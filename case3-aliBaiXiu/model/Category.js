const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    className: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

const Category = mongoose.model('Category', categorySchema);
// Category.create({
//         title: 'xuan',
//         className: 'fa-glass',
//         createTime: ''
//     })
//     .then(() => {
//         console.log("添加成功")
//     }).catch(() => {
//         console.log("添加失败");
//     });
module.exports = {
    Category: Category
};