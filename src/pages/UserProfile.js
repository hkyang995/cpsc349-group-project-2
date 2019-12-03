import React, {Component, Fragment} from 'react';

// import fire from "../config/firebase";
import Feet from "../components/feet";
import Profile from "../components/profile";



class UserProfile extends Component {
  state = {  }
  style_background = {
    // backgroundColor: '#efefef',
    // margin: ''
  }
  render() { 
    return (  
      <Fragment>
        <h1>User Profile</h1>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 order-lg-1 order-md-2 order-sm-2 order-xs-2" style={this.style_background}>
              <Feet />
              <Feet />
              <Feet />
              <Feet />
              <Feet />
            </div>
            <div class="col-lg-4 order-lg-2 order-md-1 order-sm-1 order-xs-1" style={this.style_background}>
              <Profile />
            </div>

          </div>

        </div>
       

      </Fragment>

    );
  }
}
 
export default UserProfile;