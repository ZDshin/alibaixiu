const { User } = require('../../../model/User');
const user = require('../../user');

module.exports = async (req, res) =>{
    user = new User(req.fields);
    await user.save();
}