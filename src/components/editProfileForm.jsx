import React, {Component, Fragment} from 'react';
import db from "../config/database";
import { appendToMemberExpression } from '@babel/types';
import { userInfo } from 'os';
import fire from "../config/firebase";


class EditProfileForm extends Component {
    state = {
        avatarURL: "",
        date: "",
        email: "",
        location: "",
        slogan: "",
        userID: "",
        username: "",
        website: "",
    };

       constructor(props) {
        super(props);
        
    }

    // handleAvatar() {

    // }

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

    handleDateChange = (event) => {
        this.setState({date: event.target.value});
    }
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    handleLocationChange = (event) => {
        this.setState({location: event.target.value});
    }
    handleSloganChange = (event) => {
        this.setState({slogan: event.target.value});
    }
    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }
    handleWebsiteChange = (event) => {
        this.setState({website: event.target.value});
    }



    handleSubmit = event => {

        alert(`
                "date: " ${this.state.date}
                "email: " ${this.state.email}
                "location: " ${this.state.location}
                "slogan: " ${this.state.slogan}
                ${this.state.userID}
                "username: " ${this.state.username}
                "website:" ${this.state.website}
            `)
        
        let avatarURL = this.state.avatarURL;
        let date      = this.state.date;
        let email     = this.state.user.email;
        let location  = this.state.location;
        let slogan    = this.state.slogan;
        let userID    = this.state.userID;
        let username  = this.state.user.name;
        let website   = this.state.website;
        

        db.collection("profile")
            .doc()
            .set({
                // avatarURL: avatarURL,
                date: date,
                email: email,
                location: location,
                slogan: slogan,
                // userID: userID,
                // username: username,
                website: website,

          });
        
        event.preventDefault();
    }
   
    render() { 

        return ( 
            <Fragment>
                {/* {userEmail} */}
                {/* <form onSubmit={this.handleAvatar}>
                    <button style={{margin: '1vh'}} type="submit">Change Avatar</button>
                </form> */}
                

                <form onSubmit={this.handleSubmit}>
                    
                    <label>User name:<input onChange={this.handleUsernameChange} type="text" value={this.state.username} ></input> </label>
                    <label>Slogan:   <input onChange={this.handleSloganChange}   type="text" value={this.state.slogan}   ></input> </label>
                    <label>Location: <input onChange={this.handleLocationChange} type="text" value={this.state.location} ></input> </label>
                    <label>Website:  <input onChange={this.handleWebsiteChange}  type="text" value={this.state.website}  ></input> </label>
                    <label>Date:     <input onChange={this.handleDateChange}     type="text" value={this.state.date}     ></input> </label>

                    <button style={{margin: '1vh'}} type="submit">Submit</button>
                    
                </form>
            </Fragment>
        );
    }
}
 
export default EditProfileForm;
