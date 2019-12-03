import React, {Component, Fragment} from 'react';

class Comments extends Component {
    state = {
        commentsCount: 1
    };

    render() { 
    
        return ( 
            <Fragment>
                <button type="button" class="btn btn-secondary">
                    Comments <span class="badge badge-light"> {this.state.commentsCount} </span>
                </button>
            </Fragment>
        );
    }
}
 
export default Comments;

