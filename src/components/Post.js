import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';

class Post extends Component {
  render(){
    let postStyle = {
      width: '50%',
      marginLeft: '25%'
    };

    return (
      <div style={postStyle}>
          <div class="card border-light mb-3">
            <Link class="card-header" to="/author">Preview</Link>
              <div class="card-body">
                <h4 class="card-title">title</h4>
                  <p class="card-text">body</p>
              </div>
          </div>
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    posts: state.posts
  }
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
