const db = require('../models/db.model');

const getTodos = author => {
  return db.getTodoList(author);
};

const createTodo = (author, todo) => {
  return db.createTodo(author, todo);
};

const deleteTodo = (author, id) => {
  return db.deleteTodo(author, parseInt(id, 10));
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
};
