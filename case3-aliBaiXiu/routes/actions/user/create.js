const {
    User
} = require('../../../model/User');
const _ = require('lodash');
module.exports = async (req, res) => {
<<<<<<< HEAD
    console.log(req.fields);
=======
    console.log(req);
>>>>>>> 3c8be2166a7affe49ff870cb55e5eaa3eb539895
    const user = new User(req.fields);
    // User.create(req.body);
    await user.save();
    res.send(_.pick(user, ['_id', 'email', 'nickName', 'role', 'avatar', 'createTime', 'status']));
}