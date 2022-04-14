const category = require('express').Router();

// 添加分类
category.post('/', require('./actions/category/create'));
// 查询所有分类
category.get('/', require('./actions/category/find'));

// 根据分类ID查询单个分类信息
category.get('/:id', require('./actions/category/findById'));
// 根据分类ID修改单个分类信息
category.put('/:id', require('./actions/category/findByIdAndUpdate'));

// 根据分类ID删除分类信息
category.delete('/:id', require('./actions/category/findByIdAndDelete'));
module.exports = category;