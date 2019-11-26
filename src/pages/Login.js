import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Input } from 'reactstrap';
import fire from '../config/firebase';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fireErrors: '',
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        this.setState({fireErrors: error.message})
      });
  }

  render() {
    let errorNotification = this.state.fireErrors?
    (<div><Card.Header>{this.state.fireErrors}</Card.Header></div>) : null;
    return (
      <div>
        <Card style={{ width: "40rem"}}>
          <Card.Header as="h4">Login</Card.Header>
          {errorNotification}
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Input value={this.state.email} 
                onChange={this.handleChange} 
                type="email" name="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Input value={this.state.password} 
                onChange={this.handleChange} 
                type="password" name="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password" />
              </Form.Group>
              <Button onClick={this.login} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <Card.Text>
              <a href="/register">Don't have an account? Register here!</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}