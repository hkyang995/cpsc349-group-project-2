import fire from "../config/firebase";
import db from "../config/database";
import EditProfileForm from "./editProfileForm";
import React, {Component, Fragment} from 'react';

class Profile extends Component {
state = {  }
   style_container =
   {
       margin: '3vh',
       backgroundColor: '#efefef',
    };

    handlePrompEdit() {

    }

    render() {
        return (
            <Fragment>
                <div class="container" style={this.style_container}>
                    <div class="row">
                        {/* <div class="col-md-3"> */}
                        <img style={{marginTop: '2vh'}} class="rounded-circle z-depth-2 col-md-12" alt="A beautiful girl" src="http://www.inspiredluv.com/wp-content/uploads/2016/09/27-beautiful-girl-image.jpg" />
                        {/* </div> */}
                    </div>
                    <div class="row" style={this.style_info}>

                        {/* <div class="col-lg-12 display" style={{display:''}}>
                            <p>user: </p>
                            <p>Slogan: </p>
                            <p>Location: </p>
                            <p>Website: </p>
                            <p>date: </p>
                            <button
                                type="button"
                                onClick={this.handlePrompEdit()}
                            >
                                Edit Profile
                            </button>
                        </div> */}

                        <div class="col-lg-12 display" style={{display:'block'}}>
                            <EditProfileForm />

                        </div>
                    </div>
                </div>

            </Fragment>



    )}; // End render

    // getDisplayClasses() {
    //     let classes = "btn btn-";
    //     classes += (this.state.likeActive === 0 ? "light" : "primary");
    //     return classes;
    // }
} // End class

export default Profile;
