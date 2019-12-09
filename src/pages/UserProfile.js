import React, {Component, Fragment} from 'react';

// import fire from "../config/firebase";
import Feet from "../components/feet";
import Profile from "../components/profile";

import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Input } from "reactstrap";
import fire from "../config/firebase";
import db from "../config/database";
import Space from "../components/Space";
import Footer from "../components/Footer";

import noImage from "../images/no-img.png";
import noImage2 from "../images/no-img-2.png";
import firebase from 'firebase/app';

var storage = firebase.storage();

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1549248287-f371a6246ea6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-repeat: repeat;
  background-size: cover;
`;

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      fireErrors: "",
      image: noImage,
      url: '',
      progress: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
      const progress = 0;
      this.setState({progress});
    }
  }
  
  handleUpload = () => {
    const {image} = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed', (snapshot) => {
        // processing
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {console.log(error);}, () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }

  render() {
    const style = {
      // height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center' };
   
    return (
      <div>
        <Container>
          <Card style={{ width: "40rem" }}>
            <Card.Header as="h4">Profile</Card.Header>
            <Card.Body>
              
              <Form>
                <Form.Group controlId="formBasicEmail">
                {/* <div style={style}> */}
                <center>
                Hi! How are you today?
                <Space height="20px" />
                <div>
                <progress value={this.state.progress} max="100"/>
                <br/>
                  <div>
                    <input type="file" onChange={this.handleChange}/>
                    <button onClick={this.handleUpload}>Upload</button>
                  </div>
                  <br/>
                  <img src={this.state.url || noImage} alt="Uploaded images" height="200" width="200"/>
                </div> 
                </center>
                </Form.Group>

                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Input
                    value={this.state.username}
                    onChange={this.handleChange}
                    type="username"
                    name="username"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>About yourself</Form.Label>
                  <Input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="text"
                    name="bio"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="About yourself"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="text"
                    name="location"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="location"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Website</Form.Label>
                  <Input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="text"
                    name="website"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="website"
                  />
                </Form.Group>

                <Button onClick={this.register} variant="primary" type="submit">
                  Save
                </Button>
                &nbsp;	&nbsp;	&nbsp;	&nbsp;	                          
                <Button onClick={this.register} variant="primary" type="cancel">
                  Cancel
                </Button>
              </Form>
              <Space height="20px" />             
            </Card.Body>
          </Card>
        </Container>
        <Footer />
      </div>
      
    );
  }
}


// class UserProfile extends Component {
//   state = {  }
//   style_background = {
//     // backgroundColor: '#efefef',
//     // margin: ''
//   }
//   render() { 
//     return (  
//       <Fragment>
//         <h1>User Profile</h1>
//         <div class="container">
//           <div class="row">
//             {/* <div class="col-lg-7 order-lg-1 order-md-2 order-sm-2 order-xs-2" 
//             style={this.style_background}>
//               <Feet />
//               <Feet />
//             </div> */}
//             <div class="col-lg-4 order-lg-2 order-md-1 order-sm-1 order-xs-1" 
//             style={this.style_background}>
//               <Profile />
//             </div>

//           </div>

//         </div>
       

//       </Fragment>

//     );
//   }
// }
 
export default UserProfile;