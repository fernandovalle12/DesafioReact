import React from "react";
import shortid from "shortid";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import '../index.css'

export default class TodoForm extends React.Component {
  state = {
    text: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    })
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup>
          <FormControl name="text" value={this.state.text} onChange={this.handleChange} />
          <InputGroup.Append>
            <Button variant="outline-success" onClick={this.handleSubmit}>Add</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}
