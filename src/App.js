import React, { Component } from "react";
import TodoList from "./Components/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;