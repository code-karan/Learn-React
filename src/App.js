import React from "react"
import './App.css'
import Todos from "./components/Todos.js"

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "title 1",
        completed: true,
      },
      {
        id: 2,
        title: "title 2",
        completed: true,
      },
      {
        id: 3,
        title: "title 3",
        completed: false,
      }
    ]
  }

  render() {
    return (
      <Todos todos={this.state.todos} />
    )
  }
}

export default App
