import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Input } from 'reactstrap';
import fire from '../config/firebase';

export default class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        username: '',
        password: '',
        fireErrors: '',
    }
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
  register = e => {
    console.log (this.state.username);
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(function(result) {
      return result.user.updateProfile({
        displayName: "testing"
      })
    })
    .catch((error) => {
        this.setState({fireErrors: error.message})
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let errorNotification = this.state.fireErrors?
    (<div><Card.Header>{this.state.fireErrors}</Card.Header></div>) : null;
    return (
      <div>
        <Card style={{ width: "40rem"}}>
          <Card.Header as="h4">Register</Card.Header>
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

              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Input value={this.state.username} 
                onChange={this.handleChange}
                type="username" name="username" 
                class="form-control"
                id="name" 
                placeholder="Username" />
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

              <Button onClick= {this.register} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <Card.Text>
              <a href="/login">Already have an account? Sign In</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
