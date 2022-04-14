const {
    Category
} = require('../../../model/Category');
const _ = require('lodash');
module.exports = async (req, res) => {
    console.log(req.fields);
    const category = new Category(req.fields);
    Category.create(req.fields);
    // await category.save();
    res.send(_.pick(category, ['_id', 'title', 'className', 'createTime']));
}