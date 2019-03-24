const { Router } = require('express');

class TodoRouter {
  constructor() {
    this.router = Router();

    this.onListRequest = this.onListRequest.bind(this);
    this.onCreateRequest = this.onCreateRequest.bind(this);
    this.onDeleteRequest = this.onDeleteRequest.bind(this);
  }

  setup() {
    return this.router
      .get('/', this.onListRequest)
      .post('/', this.onCreateRequest)
      .delete('/:id', this.onDeleteRequest);
  }

  onListRequest(req, res) {
    res.end('OK');
  }

  onCreateRequest(req, res) {
    res.end('OK');
  }

  onDeleteRequest(req, res) {
    res.end('OK');
  }
}

module.exports = new TodoRouter();
