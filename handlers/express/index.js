const { Router } = require('express');

const authRoute = require('./routes/auth.route');
const todoRoute = require('./routes/todo.route');

class ExpressHandler {
  constructor(app) {
    this.app = app;
    this.rootRouter = Router();

    this.setupRoutes = this.setupRoutes.bind(this);
  }

  setupRoutes() {
    // separate routes
    this.rootRouter.use('/auth', authRoute.setup());
    this.rootRouter.use('/todo', todoRoute.setup());

    // root router
    this.app.use('/api', this.rootRouter);
  }
}

module.exports = ExpressHandler;
