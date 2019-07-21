import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all"
  }


  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    }) 
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
          ...todo,
          complete: !todo.complete
        }
        } else{ 
          return todo;
        }
      })
    })
  }

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    })
  }

  render() {
    let todos = [];

    if(this.state.todoToShow === 'all'){
      todos = this.state.todos;
    } else if (this.state.todoToShow === 'open'){
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === 'closed'){
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo}/>
        {todos.map(todo => <Todo key={todo.id} toggleComplete={() => this.toggleComplete(todo.id)} todo={todo} />)}
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>Tudo</button>
          <button onClick={() => this.updateTodoToShow("open")}>Aberto</button>
          <button onClick={() => this.updateTodoToShow("closed")}>Fechado</button>
        </div>
      </div>
    );
  }
}
