// 文章分类模块
const {
    Category
} = require('../../../model/Category');

module.exports = async (req, res) => {

    // 查询文章分类信息
    const id = req.params['id'];
    // console.log(req);
    // const category = await Category.find().select('title').sort('-createTime');
    // 响应
    const category = await Category.findById(id);
    // 响应
    return res.send(category);
}