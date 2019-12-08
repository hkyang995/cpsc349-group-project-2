import React from "react";
import fire from './config/firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import UserProfile from "./pages/UserProfile";

export default class App extends React.Component {
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
    console.log(this.state.user);
    return (
      <div>
        { <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          {this.state.user ? (
              <>
                <Route path="/login">
                 <Home />
                </Route>
                <Route path="/register">
                 <Home />
                </Route>
              </>
            ) : (
              <>
                <Route path="/login">
                 <Login />
                </Route>
                <Route path="/register">
                 <Register />
                </Route>
                <Route path="/userprofile">
                 <UserProfile />
                </Route>
              </>
            )}
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router> }
      </div>
    );
  }
}