const express = require('express');
const LoginServer = require('../services/LoginServer');

const loginRouter = express.Router();

const loginService = new LoginServer()

loginRouter.post(
  '/',
  (request, response) => {
    const { email, password } = request.body;

    return response.json(loginService.login(email,password));
  }
);

module.exports = loginRouter;