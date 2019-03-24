const { Router } = require('express');
const requireAuth = require('../middlewares/require-auth.middleware');
const TodoService = require('../../../core/services/todo.service');

class TodoRouter {
  constructor() {
    this.router = Router();

    this.onListRequest = this.onListRequest.bind(this);
    this.onCreateRequest = this.onCreateRequest.bind(this);
    this.onDeleteRequest = this.onDeleteRequest.bind(this);
  }

  setup() {
    return this.router
      .get('/', requireAuth, this.onListRequest)
      .post('/', requireAuth, this.onCreateRequest)
      .delete('/:id', requireAuth, this.onDeleteRequest);
  }

  onListRequest(req, res) {
    return res.json(TodoService.getTodos(req.user.name));
  }

  onCreateRequest(req, res) {
    return res.json(TodoService.createTodo(req.user.name, req.body));
  }

  onDeleteRequest(req, res) {
    return res.json(TodoService.deleteTodo(req.user.name, req.params.id));
  }
}

module.exports = new TodoRouter();
