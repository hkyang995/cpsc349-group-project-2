import React, {Component, Fragment} from 'react';
import Like from "./like";
import Comments from "./comments";
import CommentContent from "./commentcontent";

class Feet extends Component {
    state = {  }
    style_container = {
        margin: '3vh',
        backgroundColor: '#efefef'

    };
    style_img = {
        padding: 3
    }

    accessCommentContent2 = () => {
        this.refs.child1.handleCollapse();
    }

   

    render() { 
        return (  
            <Fragment>
                
                <div className="container" style={this.style_container}>
                    <div className="row">
                        <img style= {this.style_img} className="col-lg-3 col-md-3 col-sm-3" src="http://www.prettydesigns.com/wp-content/uploads/2015/03/Tomatoes-and-Eggs.jpg" alt="Food"></img>

                        <div className="col-lg-9">
                            <p>user: </p>
                            <p>date: </p>
                            <p>Review: </p>
                        </div>
                    </div>
                    <div className="row">
                            <Like />
                            <Comments />
                    </div>
                </div>

                

            </Fragment>
        );
    }
}
 
export default Feet; 