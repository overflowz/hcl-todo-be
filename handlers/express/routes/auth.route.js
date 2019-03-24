const { Router } = require('express');
const AuthService = require('../../../core/services/auth.service');

class AuthRouter {
  constructor() {
    this.router = Router();

    this.onAuthRequest = this.onLoginRequest.bind(this);
    this.onLoginRequest = this.onLoginRequest.bind(this);
  }

  setup() {
    return this.router
      .post('/login', this.onLoginRequest)
      .post('/logout', this.onLogoutRequest);
  }

  onLoginRequest(req, res) {
    const user = AuthService.login(req.body);
    return res.json(user);
  }

  onLogoutRequest(req, res) {
    return res.end('OK');
  }
}

module.exports = new AuthRouter();
