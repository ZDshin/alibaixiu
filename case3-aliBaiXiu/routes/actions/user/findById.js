// 验证模块
const Joi = require('joi');
// 用户模块
const { User } = require('../../../model/User');

module.exports = async (req, res) => {
	// 获取用户id
	const id = req.params['id'];
    const schema = Joi.object({
        name: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).error(new Error('用户id不符合格式'))})
     const result = schema.validate(id);
    //  console.log(result);
	// 验证模型
	// const schema = Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).error(new Error('用户id不符合格式'));
	// 验证
	// const { error } = Joi.validate(id, schema)
	// 数据格式没有通过验证
	if (!result.error) return res.status(400).send({message: result.error});
	// 通过验证
	// 查询用户信息
	const user = await User.findById(id).select('-password');
	// 响应
	return res.send(user);
	
};