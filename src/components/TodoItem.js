import React, { Component } from "react";
import PropType from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgoundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: " 1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onClick={this.props.toggleComplete.bind(this, id)}
          />{" "}
          {title}
          <button style={btnDelete} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}
TodoItem.PropType = {
  todo: PropType.array.isRequired,
  toggleComplete: PropType.func.isRequired,
  delTodo: PropType.func.isRequired
};
const btnDelete = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px",
  borderRadius: "20%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
