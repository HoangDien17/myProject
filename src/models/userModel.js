import mongoose from 'mongoose'
import Schema from 'mongoose/Schema'

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

module.exports = mongoose.model("users", UserSchema);
