// DB mockup.
const UserModel = require('./user.model');
const TodoModel = require('./todo.model');

// even though I'm against mutating...
let todos = [];

// fancy id generator
function* genid() {
  let x = 1;
  // eslint-disable-next-line no-plusplus
  while (true) yield x++;
}

const idGenerator = genid();

const findUser = name => {
  return new UserModel(name);
};

// !! mutating !!
// also terrible decision here, since todo might be not
// an object which will fail. I do realize that.
const createTodo = (author, todo) => {
  const id = idGenerator.next().value;
  const todo_ = new TodoModel({ id, author, ...todo });

  todos.push(todo_);
  return todo_;
};

// !! mutating !!
const deleteTodo = (author, id) => {
  todos = todos.filter(x => {
    return !(x.id === id && x.author === author);
  });

  return id;
};

const getTodoList = author => {
  const todos_ = todos.filter(x => x.author === author);

  return {
    todos: todos_,
    total: todos_.length,
  };
};

module.exports = {
  findUser,
  createTodo,
  deleteTodo,
  getTodoList,
};
