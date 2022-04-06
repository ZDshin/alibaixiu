const {
    User
} = require('../../../model/User');
const _ = require('lodash');
module.exports = async (req, res) => {
    console.log(req);
    const user = new User(req.fields);
    // User.create(req.body);
    await user.save();
    res.send(_.pick(user, ['_id', 'email', 'nickName', 'role', 'avatar', 'createTime', 'status']));
}