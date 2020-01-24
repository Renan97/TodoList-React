import React, { Component } from "react";
import PropType from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ title: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add todo ..."
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: "10", padding: "5px" }}
        />
        <input
          type="submit"
          value="Submit"
          className="btnSubmit"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}
AddTodo.PropType = {
  addTodo: PropType.func.isRequired
};
export default AddTodo;
