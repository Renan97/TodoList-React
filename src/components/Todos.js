import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropType from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={this.props.toggleComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.PropType = {
  todos: PropType.array.isRequired,
  toggleComplete: PropType.func.isRequired,
  delTodo: PropType.func.isRequired
};
export default Todos;
