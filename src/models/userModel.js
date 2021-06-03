const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: String,
  password: String,
  status: String
})

UserSchema.statics = {
  addNewUser(item) {
    return this.create(item);
  },
  checkUserExists(username) {
    return this.findOne({"username": username}).exec();
  }
}
UserSchema.methods = {
  comparePassword(pass) {
    return bcrypt.compare(pass, this.password)
  }
}

module.exports = mongoose.model("users", UserSchema);
