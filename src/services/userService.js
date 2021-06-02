import UserModel from '../models/userModel'
import bcrypt from 'bcrypt'

let saltRounds = 10;

let register = (username, pass) => {
  return new Promise(async (resolve, reject) => {
    // check user exists
    let user = await UserModel.checkUserExists(username);
    if (user) {
      res.status(500).send("Tên đăng kí đã tồn tại.");
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

module.exports = { register };
