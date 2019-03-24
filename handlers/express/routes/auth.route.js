const { Router } = require('express');

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
    return res.end('OK');
  }

  onLogoutRequest(req, res) {
    return res.end('OK');
  }
}

module.exports = new AuthRouter();
