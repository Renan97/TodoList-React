import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header.js";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  initTodoList = todos => {
    todos.map(todo => {});
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        this.setState({ todos: res.data });
        this.initTodoList(res.data);
      });
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // });
  };

  maxIdValue = todos => {
    var id = 0;
    todos.forEach(todo => {
      if (todo.id > id) {
        id = todo.id;
      }
    });

    return id;
  };

  AddTodo = newTitle => {
    // console.log(this.maxIdValue(this.state.todos) + 1);
    // const newTodo = {
    //   id: this.maxIdValue(this.state.todos) + 1,
    //   title: newTitle,
    //   completed: false
    // };
    // this.setState({ todos: [...this.state.todos, newTodo] });

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: newTitle,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo AddTodo={this.AddTodo} />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />

            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
