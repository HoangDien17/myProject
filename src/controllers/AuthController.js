const user = require ('../services/userService');

let register = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    await user.register(username, password)
    res.status(200).send("Tạo tài khoản thành công !")
  } catch (error) {
    res.status(401).send(error)
  }
};

let login = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    let accessToken = await user.login(username, password);
    res.status(200).send(accessToken);
  } catch (error) {
    res.status(401).send(error);
  }
}

module.exports = { register, login };
