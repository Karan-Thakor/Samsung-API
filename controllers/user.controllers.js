const md5 = require("md5");
const db = require("../models");
const User = db.user;




exports.register = async(req, res) => {
    let body = req.body;
    body.password = md5(req.body.password);
    let user = new User(body);
    let result = await user.save();
    result = result.toObject(); 
    res.send(result);
}

exports.login = async(req, res) =>{
    
    let user = await User.findOne({email:req.body.email, password:md5(req.body.password)})
    res.send(user)
}
