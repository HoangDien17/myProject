const registerRoute = require('./register');
const loginRoute = require('./login');

module.exports = route = (app) => {
  app.use("/register", registerRoute);
  app.use("/login", loginRoute);
}