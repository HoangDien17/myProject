const express = require ('express');
const route = express.Router();
const AuthController = require ('../controllers/AuthController');

  route.post("/", AuthController.login);

module.exports = route