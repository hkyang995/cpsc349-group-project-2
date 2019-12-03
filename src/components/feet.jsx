import React, {Component, Fragment} from 'react';
import Like from "../components/like";
import Comments from "../components/comments";

class Feet extends Component {
    state = {  }
    style_container = {
        margin: '3vh',
        backgroundColor: '#efefef'

    };
    style_img = {
        padding: 3
    }

    // style_info = {
    //     magin: 2
    // }


    render() { 
        return (  
            <Fragment>
                
                <div class="container" style={this.style_container}>
                    <div class="row">
                        <img style= {this.style_img} class="col-lg-3 col-md-3 col-sm-3" src="http://www.prettydesigns.com/wp-content/uploads/2015/03/Tomatoes-and-Eggs.jpg" alt="Food"></img>

                        <div class="col-lg-9">
                            <p>user: </p>
                            <p>date: </p>
                            <p>comment: </p>
                            <Like />
                            <Comments />
                        </div>
                    </div>
                </div>

                

            </Fragment>
        );
    }
}
 
export default Feet; 