class Todo {
  constructor(params) {
    this.id = params.id;
    this.text = (params || {}).text;
    this.author = (params || {}).author;
  }
}

module.exports = Todo;
