// 验证模块
const Joi = require('joi');
// 用户模块
const {
    Category
} = require('../../../model/Category');
module.exports = async (req, res) => {
    const id = req.params['id'];
    if (id.indexOf('-') != -1) {
        // 批量删除
        // 将字符串id分割为数组
        const ids = id.split('-');
        // 存储结果数组
        const result = [];
        for (const item of ids) {
            // 删除用户
            let category = await Category.findByIdAndDelete(item);
            // 将删除的用户存储在数组中
            result.push(category);
        }
        // 响应
        res.send(result);
    } else {
        // 单个删除
        let category = await Category.findByIdAndDelete(id);
        // 响应
        res.send(category);
    }

}