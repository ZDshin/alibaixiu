const { User } = require('../../../model/User');
const user = require('../../user');
const _ = require('lodash');
module.exports = async (req, res) =>{
    // console.log(req.body);
    // user = new User(req.body);
    User.create(req.body);
    // await user.save();
    res.send(_.pick(user, ['_id', 'email', 'nickName', 'role', 'avatar', 'createTime', 'status']));
}