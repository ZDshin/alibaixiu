const {User} = require('../../../model/User');
const _ = require('lodash');

// hash密码
// const bcrypt = require('bcryptjs');
module.exports = async ( req, res)=>{
    // console.log(req);
    // res.send('ok')
    let user = await User.findOne({"email": req.body.email});
    // console.log(user);  //查找到的用户
    // const validPassword = await bcrypt.compare(req.body.password, user.password);
    // console.log(validPassword);
    if(req.body.password == user.password){
        res.send(_.pick(user, ['nickName', 'email', 'role', 'avatar', '_id', 'status', 'createTime']));
    }else{
        return res.status(400).send({message: '邮箱地址或者密码错误'});
    }
    
}
