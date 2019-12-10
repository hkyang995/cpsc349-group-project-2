import React, {Component, Fragment} from 'react';
import db from "../config/database";
import fire from "../config/firebase";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Input } from "reactstrap";
import styled from "styled-components";
import Space from "../components/Space";



import FooterComponent from "../components/Footer";

import firebase from 'firebase/app';
import defaultImage from "../images/default.jpg";
import noImage from "../images/no-img.png";



const Container = styled.div`
  display: flex;
  width: 100%;
  height: 87vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: none;
  background-image: url("https://images.unsplash.com/photo-1549248287-f371a6246ea6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-repeat: repeat;
  background-size: cover;
`;


var hidden = "hidden";
var storage = firebase.storage();

class UserProfile extends Component {
  state = {
      avatarURL: "",
      date:      "",
      email:     "",
      location:  "",
      description:    "",
      // userID:    "default",
      name:      "",
      website:   "",
  };

  constructor (props) {
    super(props);
    // this.getData();
  }

  getData () {
  
  }

  componentDidMount() {
      this.authListener();
      // db.collection('profile')
      //   .get()
      //   .then( snapshot => {
      //     const profiles = []
      //     snapshot.forEach( doc => {
      //       const data = doc.data()
      //       profiles.push(data)
      //     })
      //     this.setState ({profile : profiles})
      //     console.log(snapshot)
      //   })
      //   .catch ( error => console.log(error))
  }

  authListener() {
      fire.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ user });
        } else {
          this.setState({ user: null });
        }
      });
  }
// =========================================
// =========================================



// =========================================
// =========================================



  handleDateChange = (event) => {
      this.setState({date: event.target.value});
  }
  handleEmailChange = (event) => {
      this.setState({email: event.target.value});
  }
  handleLocationChange = (event) => {
      this.setState({location: event.target.value});
  }
  handleDescriptionChange = (event) => {
      this.setState({description: event.target.value});
  }
  handleUsernameChange = (event) => {
      this.setState({username: event.target.value});
  }
  handleWebsiteChange = (event) => {
      this.setState({website: event.target.value});
  }

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  handleSubmit = event => {

    // alert(`
    //         "date: " ${this.state.date}
    //         "email: " ${this.state.user.email}
    //         "location: " ${this.state.location}
    //         "description: " ${this.state.description}
    //         ${this.state.userID}
    //         "username: " ${this.state.username}
    //         "website:" ${this.state.website}
    //     `)
        
    // let avatarURL = this.state.avatarURL;
    let date      = Date();
    let email     = this.state.user.email;
    let location  = this.state.location;
    let description    = this.state.description;
    // let name      = this.state.user.name;
    // let username  = this.state.user.name;
    let website   = this.state.website;
  
    db.collection("profile")
      .doc(email)
      .set({
        // avatarURL: avatarURL,
        date: date,
        email: email,
        location: location,
        description: description,
        // userID: userID,
        // name: name,
        website: website,
      });
        
    event.preventDefault();
  }
   


  //=================================================
  // Start upload avatar
  //=================================================

  
  uploadImage = event => {
    const image = event.target.files[0];
    this.setState(() => ({image}));
    const progress = 0;
    this.setState({progress});
    hidden = "";
  };

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
        storage.ref('images').child(image.name).getDownloadURL().then(avatarURL => {
            console.log(avatarURL);
            this.setState({avatarURL});
        })
    });
  }

  //=================================================
  
  
  
  
  
  //=================================================
  render() { 

    return ( 

      <Fragment>

        <Container>
        <Card style={{ width: "60rem" }}>
            <Card.Header as="h4">Profile</Card.Header>
            <Card.Body>
              <div className="row">
                <img className="col-lg-7 col-md-8 col-sm-8" src={defaultImage}/>
                
                {/* Card View */}
                <div className="col-lg-5 col-md-4 col-sm-4" style={{display: ""}}>
                  <h6>Hello Everybody, I am</h6>
                  <h3>Name</h3>
                  <h4>Title</h4>
                  <p>Description about me</p>
                  <p>Description about me</p>
                  <p>Description about me</p>
                  <p>Email</p>
                  <p>Location</p>
                  <p>Website</p>
                  <a href="/userprofileedit"><Button> Edit Profile </Button></a>
                </div> {/* End Card View */}

                {/* Card Edit*/}
                {/* <div className="col-lg-5 col-md-4 col-sm-4" style={{display: "none"}} >
                <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>User name</Form.Label>
                  <Input
                    // value={}
                    onChange={this.handleUsernameChange}
                    type="text"
                    name="username"
                    className="form-control"
                    id="editusername"
                    placeholder="User name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Input
                    // value={this.state.password}
                    onChange={this.handleChange}
                    type="text"
                    name="password"
                    className="form-control"
                    id="editpassword"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <textarea
                    // value={this.state.password}
                    onChange={this.handleDescriptionChange}
                    type="text"
                    name="description"
                    className="form-control"
                    id="editdescription"
                    placeholder="Description"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Input
                    // value={this.state.password}
                    onChange={this.handleLocationChange}
                    type="text"
                    name="location"
                    className="form-control"
                    id="editlocation"
                    placeholder="Location"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Website</Form.Label>
                  <Input
                    // value={this.state.password}
                    onChange={this.handleWebsiteChange}
                    type="text"
                    name="website"
                    className="form-control"
                    id="editwebsite"
                    placeholder="Website"
                  />
                </Form.Group>
                <Button onClick={this.handleSubmit} variant="primary" type="submit">
                  Update
                </Button>
              </Form>
                </div>  */}
                {/* End Card Edit */}


              </div> {/* End row */}

              
              {/* <Space height="20px" /> */}
              
            </Card.Body>
          </Card>
        </Container>
        <FooterComponent />

      </Fragment>
    );
  }
}
 
export default UserProfile;





