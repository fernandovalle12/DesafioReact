import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import '../index.css'


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
      <Container>
        <Row className="justify-content-md-center">
          <TodoForm onSubmit={this.addTodo}/>
          {todos.map(todo => <Todo key={todo.id} toggleComplete={() => this.toggleComplete(todo.id)} todo={todo} />)}
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="1">
            <Button variant="outline-dark" onClick={() => this.updateTodoToShow("all")}>Tudo</Button>
          </Col>
          <Col xs lg="1">
            <Button variant="outline-primary" onClick={() => this.updateTodoToShow("open")}>Aberto</Button>
          </Col>
          <Col xs lg="1">
            <Button variant="outline-danger" onClick={() => this.updateTodoToShow("closed")}>Fechado</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
