
const todoStore = {
  waitingTodos: [],
  inProgrssTodos: [],
  doneTodos: [],

  getWaitingTodos: function() {
    return this.waitingTodos;
  },
  
  getInProgressTodos: function() {
    return this.inProgrssTodos;
  },

  getDoneTodos: function() {
    return this.doneTodos;
  },

  saveWaitingTodos: function(todos) {
    this.waitingTodos = todos;
  },

  saveInProgressTodos: function(todos) {
    this.getInProgressTodos = todos;
  }
}