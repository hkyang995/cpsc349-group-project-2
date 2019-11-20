import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "40rem" }}>
          <Card.Header as="h5">Register</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <Card.Text>
              <a href="/login">Have an account? Login here!</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
