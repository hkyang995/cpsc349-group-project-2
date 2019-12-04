import React from "react";
import fire from "./config/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Faq from "./pages/faq";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import UserProfile from "./pages/UserProfile";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        // console.log(this.state.user); // output
        // console.log(this.state.user.displayName); // output
        console.log(this.state.user.uid); // output
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
        {
          <Router>
            <Navbar />
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/faq">
                <Faq />
              </Route>
              <Route path="/landingpage">
                <LandingPage />
              </Route>
              {this.state.user ? (
                <>
                  <Route path="/login">
                    <Home />
                  </Route>
                  <Route path="/register">
                    <Home />
                  </Route>
                  <Route path="/userprofile">
                    <UserProfile />
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
                </>
              )}
            </Switch>
          </Router>
        }
      </div>
    );
  }
}
