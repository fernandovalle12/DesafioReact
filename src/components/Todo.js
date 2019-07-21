import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../index.css'

export default props => ( 
  <Container>
    <Row className="justify-content-center">
      <Col xs lg="3">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Checkbox onClick={props.toggleComplete} />
          </InputGroup.Prepend>
          <FormControl style={{ 
            textDecoration: props.todo.complete ? "line-through" : ""
          }} value={props.todo.text} disabled/>
        </InputGroup>
      </Col>
    </Row>
  </Container>
)