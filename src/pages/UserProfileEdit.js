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
  background-image: url("https://www.foodandtable.com/wp-content/uploads/2017/07/Corn-Nectarine-Salad-5.jpg");
  background-repeat: repeat;
  background-size: cover;
`;


var hidden = "hidden";
var storage = firebase.storage();

class UserProfileEdit extends Component {
  
  

  constructor (props) {
    super(props);
    this.state = {
      email:     "",
      title: "",
      displayName: "",
      facebook: "",
      username: "",
      password: "",
      fireError: "",
      image: noImage,
      url: "",
      progress: 0,
      date:      "",
      location:  "",
      description:    "",
      name:      "",
      website:   "",
  };
    // this.getData();
    this.handleUpload = this.handleUpload.bind(this);

  }

  


  //=================================================

  //=================================================
    componentDidMount() {
      this.authListener();
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


  //=================================================

  //=================================================

  uploadImage = event => {
    const image = event.target.files[0];
    this.setState(() => ({image}));
    const progress = 0;
    this.setState({progress});
    hidden = "";
  };

  handleUpload = () => {    
    var email = this.state.user.email;
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
            this.setState({url: url});
            

            db.collection("profile")
              .doc(email)
              .set({
                avatarURL: url,
              });
        })
    });
    
  }
  //=================================================

  //=================================================
  getData = () => {
    // var rootRef = firebase.db().ref().child("profile");
    // let profile = firebase.db().ref("profile");
    // let avatarURL = profile.avatarURL;
    // return avatarURL;
  }

  
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
  handleDisplayNameChange = (event) => {
      this.setState({website: event.target.value});
  }
  handleTitleChange = (event) => {
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
        
    let avatarURL = this.state.url;
    let date      = Date();
    let email     = this.state.user.email;
    let location  = this.state.location;
    let description    = this.state.description;
    let displayName      = this.state.displayName;
    let title      = this.state.title;
    // let username  = this.state.user.name;
    let website   = this.state.website;

  
    db.collection("profile")
      .doc(email)
      .set({
        avatarURL: avatarURL,
        date: date,
        // email: email,
        location: location,
        description: description,
        displayName: displayName,
        title: title,
        website: website,
      });
        
    event.preventDefault();
  }
   

  
  
  
  
  
  //=================================================
  render() { 
    
    return ( 

      <Fragment>
        {this.getData()}
        <Container>
        <Card style={{ width: "60rem" }}>
            <Card.Header as="h4">Profile</Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-lg-7 col-md-8 col-sm-8">
                  <div>
                    <input type="file" onChange={this.uploadImage}/>
                    <button onClick={this.handleUpload}>Upload</button>
                  </div>

                  <progress value={this.state.progress} hidden={hidden} max="100"/>
                  <br/>
                  <img className="col-lg-12" src={this.state.url || defaultImage} alt="Uploaded images"/>
                </div>
                {/* <img className="col-lg-7 col-md-8 col-sm-8" src={defaultImage}/> */}
                
                {/* Card View */}
                {/* <div className="col-lg-5 col-md-4 col-sm-4" style={{display: "none"}}>
                  <h6>Hello Everybody, I am</h6>
                  <h3>Name</h3>
                  <h4>Title</h4>
                  <p>Description about me</p>
                  <p>Description about me</p>
                  <p>Description about me</p>
                  <p>Email</p>
                  <p>Location</p>
                  <p>Website</p>
                  
                </div>  */}
                {/* End Card View */}

                {/* Card Edit*/}
                <div className="col-lg-5 col-md-4 col-sm-4">
                <Form>
                {/* <Form.Group controlId="formBasicEmail"> */}
                  <h6>Display name</h6>
                  <Input
                    // value={}
                    onChange={this.handleUsernameChange}
                    type="text"
                    name="displayname"
                    className="form-control"
                    id="editusername"
                    // placeholder="User name"
                  />
              <Space height="10px" />

                {/* </Form.Group> */}
                {/* <Form.Group controlId="formBasicPassword"> */}
                  <h6>Title</h6>
                  <Input
                    // value={this.state.password}
                    onChange={this.handleChange}
                    type="text"
                    name="title"
                    className="form-control"
                    id="editpassword"
                    // placeholder="Password"
                  />
              <Space height="10px" />

                {/* </Form.Group> */}
                {/* <Form.Group controlId="formBasicPassword"> */}
                  <h6>Description</h6>
                  <textarea
                    // value={this.state.password}
                    onChange={this.handleDescriptionChange}
                    type="text"
                    name="description"
                    className="form-control"
                    id="editdescription"
                    // placeholder="Description"
                  />
              <Space height="10px" />

                {/* </Form.Group>
                <Form.Group controlId="formBasicPassword"> */}
                  <h6>Location</h6>
                  <Input
                    // value={this.state.password}
                    onChange={this.handleLocationChange}
                    type="text"
                    name="location"
                    className="form-control"
                    id="editlocation"
                    // placeholder="Location"
                  />
              <Space height="10px" />

                {/* </Form.Group> */}
                {/* <Form.Group controlId="formBasicPassword"> */}
                  <h6>Website</h6>
                  <Input
                    // value={this.state.password}
                    onChange={this.handleWebsiteChange}
                    type="text"
                    name="website"
                    className="form-control"
                    id="editwebsite"
                    // placeholder="Website"
                  />
                {/* </Form.Group> */}
                <Space height="10px" />


                 

                <Button onClick={this.handleSubmit} variant="primary" type="submit">
                  Update
                </Button>
                <a href="/userprofile"> <Button>
                  Done
                </Button></a>
              </Form>




                </div> {/* End Card Edit */}


              </div> {/* End row */}

              
              
            </Card.Body>
          </Card>
        </Container>
        


        <FooterComponent />

      </Fragment>
    );
  }
}
 
export default UserProfileEdit;






















































// import React, {Component, Fragment} from 'react';
// import db from "../config/database";
// import fire from "../config/firebase";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
// import { Input } from "reactstrap";
// import styled from "styled-components";
// import Space from "../components/Space";



// import FooterComponent from "../components/Footer";

// import firebase from 'firebase/app';
// import defaultImage from "../images/default.jpg";
// import noImage from "../images/no-img.png";



// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   height: 87vh;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: none;
//   background-image: url("https://www.foodandtable.com/wp-content/uploads/2017/07/Corn-Nectarine-Salad-5.jpg");
//   background-repeat: repeat;
//   background-size: cover;
// `;


// var hidden = "hidden";
// var storage = firebase.storage();

// class UserProfileEdit extends Component {
  
//   state = {
//       avatarURL: "",
//       date:      "",
//       email:     "",
//       location:  "",
//       description:    "",
//       // userID:    "default",
//       name:      "",
//       website:   "",
//   };

//   constructor (props) {
//     super(props);

//     // this.getData();
//   }

//   getData () {
  
//   }

//   componentDidMount() {
//       this.authListener();
//   }

//   authListener() {
//       fire.auth().onAuthStateChanged(user => {
//         if (user) {
//           this.setState({ user });
//         } else {
//           this.setState({ user: null });
//         }
//       });
//   }
//   handleDateChange = (event) => {
//       this.setState({date: event.target.value});
//   }
//   handleEmailChange = (event) => {
//       this.setState({email: event.target.value});
//   }
//   handleLocationChange = (event) => {
//       this.setState({location: event.target.value});
//   }
//   handleDescriptionChange = (event) => {
//       this.setState({description: event.target.value});
//   }
//   handleUsernameChange = (event) => {
//       this.setState({username: event.target.value});
//   }
//   handleWebsiteChange = (event) => {
//       this.setState({website: event.target.value});
//   }

//   // handleChange = e => {
//   //   this.setState({ [e.target.name]: e.target.value });
//   // };

//   handleSubmit = event => {

//     // alert(`
//     //         "date: " ${this.state.date}
//     //         "email: " ${this.state.user.email}
//     //         "location: " ${this.state.location}
//     //         "description: " ${this.state.description}
//     //         ${this.state.userID}
//     //         "username: " ${this.state.username}
//     //         "website:" ${this.state.website}
//     //     `)
        
//     // let avatarURL = this.state.avatarURL;
//     let date      = Date();
//     let email     = this.state.user.email;
//     let location  = this.state.location;
//     let description    = this.state.description;
//     // let name      = this.state.user.name;
//     // let username  = this.state.user.name;
//     let website   = this.state.website;
  
//     db.collection("profile")
//       .doc(email)
//       .set({
//         // avatarURL: avatarURL,
//         date: date,
//         email: email,
//         location: location,
//         description: description,
//         // userID: userID,
//         // name: name,
//         website: website,
//       });
        
//     event.preventDefault();
//   }
   


//   //=================================================
//   // Start upload avatar
//   //=================================================

  
//   uploadImage = event => {
//     const image = event.target.files[0];
//     this.setState(() => ({image}));
//     const progress = 0;
//     this.setState({progress});
//     hidden = "";
//   };

//   handleUpload = () => {    
//     const {image} = this.state;
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on('state_changed', (snapshot) => {
//         // processing
//         const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//         this.setState({progress});
//       }, 
//       (error) => {console.log(error);}, () => {
//         // complete function ....
//         storage.ref('images').child(image.name).getDownloadURL().then(avatarURL => {
//             console.log(avatarURL);
//             this.setState({avatarURL});
//         })
//     });
//   }

//   //=================================================
  
  
  
  
  
//   //=================================================
//   render() { 

//     return ( 

//       <Fragment>
//         <Container>
//         <Card style={{ width: "60rem" }}>
//             <Card.Header as="h4">Profile</Card.Header>
//             <Card.Body>
//               <div className="row">
//                 <div className="col-lg-7 col-md-8 col-sm-8">
//                   <div>
//                     <input type="file" onChange={this.uploadImage}/>
//                     <button onClick={this.handleUpload}>Upload</button>
//                   </div>

//                   <progress value={this.state.progress} hidden={hidden} max="100"/>
//                   <br/>
//                   <img className="col-lg-12" src={this.state.url || defaultImage} alt="Uploaded images"/>
//                 </div>
//                 {/* <img className="col-lg-7 col-md-8 col-sm-8" src={defaultImage}/> */}
                
//                 {/* Card View */}
//                 {/* <div className="col-lg-5 col-md-4 col-sm-4" style={{display: "none"}}>
//                   <h6>Hello Everybody, I am</h6>
//                   <h3>Name</h3>
//                   <h4>Title</h4>
//                   <p>Description about me</p>
//                   <p>Description about me</p>
//                   <p>Description about me</p>
//                   <p>Email</p>
//                   <p>Location</p>
//                   <p>Website</p>
                  
//                 </div>  */}
//                 {/* End Card View */}

//                 {/* Card Edit*/}
//                 <div className="col-lg-5 col-md-4 col-sm-4">
//                 <Form>
//                 {/* <Form.Group controlId="formBasicEmail"> */}
//                   <h6>User name</h6>
//                   <Input
//                     // value={}
//                     onChange={this.handleUsernameChange}
//                     type="text"
//                     name="username"
//                     className="form-control"
//                     id="editusername"
//                     // placeholder="User name"
//                   />
//               <Space height="10px" />

//                 {/* </Form.Group> */}
//                 {/* <Form.Group controlId="formBasicPassword"> */}
//                   <h6>Password</h6>
//                   <Input
//                     // value={this.state.password}
//                     onChange={this.handleChange}
//                     type="text"
//                     name="password"
//                     className="form-control"
//                     id="editpassword"
//                     // placeholder="Password"
//                   />
//               <Space height="10px" />

//                 {/* </Form.Group> */}
//                 {/* <Form.Group controlId="formBasicPassword"> */}
//                   <h6>Description</h6>
//                   <textarea
//                     // value={this.state.password}
//                     onChange={this.handleDescriptionChange}
//                     type="text"
//                     name="description"
//                     className="form-control"
//                     id="editdescription"
//                     // placeholder="Description"
//                   />
//               <Space height="10px" />

//                 {/* </Form.Group>
//                 <Form.Group controlId="formBasicPassword"> */}
//                   <h6>Location</h6>
//                   <Input
//                     // value={this.state.password}
//                     onChange={this.handleLocationChange}
//                     type="text"
//                     name="location"
//                     className="form-control"
//                     id="editlocation"
//                     // placeholder="Location"
//                   />
//               <Space height="10px" />

//                 {/* </Form.Group> */}
//                 {/* <Form.Group controlId="formBasicPassword"> */}
//                   <h6>Website</h6>
//                   <Input
//                     // value={this.state.password}
//                     onChange={this.handleWebsiteChange}
//                     type="text"
//                     name="website"
//                     className="form-control"
//                     id="editwebsite"
//                     // placeholder="Website"
//                   />
//                 {/* </Form.Group> */}
//                 <Space height="10px" />


                 

//                 <Button onClick={this.handleSubmit} variant="primary" type="submit">
//                   Update
//                 </Button>
//                 <a href="/userprofile"> <Button>
//                   Done
//                 </Button></a>
//               </Form>




//                 </div> {/* End Card Edit */}


//               </div> {/* End row */}

              
              
//             </Card.Body>
//           </Card>
//         </Container>
        


//         <div>
//           <div>
//             <input type="file" onChange={this.uploadImage}/>
//             <button onClick={this.handleUpload}>Upload</button>
//           </div>
//           <progress value={this.state.progress} hidden={hidden} max="100"/>
//           <br/>
//           <img src={this.state.url || noImage} alt="Uploaded images" height="150" width="150"/>
//         </div> 

//         <form className="container" onSubmit={this.handleSubmit}>
//             <div className="row">
//                 <label className="col-lg-5 col-md-4 col-sm-4"> User name: </label>
//                 <input className="col-lg-7 col-md-8 col-sm-8" onChange={this.handleUsernameChange} type="text" value={this.state.username} />
//             </div>
//             <div className="row">
//                 <label className="col-lg-5 col-md-4 col-sm-4"> Description: </label>
//                 <input className="col-lg-7 col-md-8 col-sm-8" onChange={this.handleDescriptionChange}   type="text" value={this.state.description} />
            
//             </div>                    
//             <div className="row">
//                 <label className="col-lg-5 col-md-4 col-sm-4">Location: </label>
//                 <input className="col-lg-7 col-md-8 col-sm-8" onChange={this.handleLocationChange} type="text" value={this.state.location} />
//             </div>                    
//             <div className="row">
//                 <label className="col-lg-5 col-md-4 col-sm-4"> Website:  </label>
//                 <input className="col-lg-7 col-md-8 col-sm-8" onChange={this.handleWebsiteChange}  type="text" value={this.state.website} />
//             </div>                    

//             <button style={{margin: '1vh'}} type="submit">Submit</button>
//         </form>

//         <FooterComponent />

//       </Fragment>
//     );
//   }
// }
 
// export default UserProfileEdit;





