import React, {Component} from 'react';
import Post from './Post';
import {Link} from 'react-router-dom'
import BackgroundImg from '../realbackground.jpg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions'
import './CSS/home.css'

class Home extends Component {

  postList = () => this.props.posts.map((post, i) => {
      let comments = this.props.comments.filter(comment => comment.postId === post.id)
      return (  <Post key={i} post={post} comments={comments}/>)
      }
  )

  render() {
    return(
      <div>
        <div className="homeStyle">
          <Link to="/newpost" style={{marginLeft: '45%'}}><button>New Post</button></Link>
          <div className="listStyle">
          {this.postList()}
          </div>
          <div className="left" style={{marginLeft: '45%', color: 'white'}}>-SCROLL-</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
   return {
     posts: state.Posts,
     comments: state.Comments
   }
 }
function mapDispatchToProps(dispatch) {
 return {
   Actions: bindActionCreators(Actions, dispatch)
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
