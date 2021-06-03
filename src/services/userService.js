const UserModel = require ('../models/userModel');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

let saltRounds = 10;

let register = (username, pass) => {
  return new Promise(async (resolve, reject) => {
    // check user exists
    let user = await UserModel.checkUserExists(username);
    if (user) {
      reject("Tên đăng kí đã tồn tại.");
    }
    //hash password
    let salt = bcrypt.genSaltSync(saltRounds);
    let userItem = {
      username: username,
      password: bcrypt.hashSync(pass, salt)
    }

    // Save user
    let userRegister = await UserModel.addNewUser(userItem);
    resolve(userRegister);
  })
}

let login = (username, pass) => {
  return new Promise(async (resolve, reject) => {
    let user = await UserModel.checkUserExists(username);
    console.log(user)
    if(!user) {
      reject("Username nhập chưa chính xác!");
    }
    let checkPass = await user.comparePassword(pass);
    if(!checkPass) {
      reject("Mật khẩu đăng nhập chưa chính xác!");
    }
    let accessToken = jwt.sign({user: username}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30m'});
    resolve(accessToken)
  })
}

module.exports = { register, login };
