import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import fire from "../config/firebase";

export default class NavbarComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Food Fight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Landing Page</Nav.Link>
            <Nav.Link href="/home">Home</Nav.Link>
            {this.state.user ? (
              <>
                <Nav.Link href="/home">Testing</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

