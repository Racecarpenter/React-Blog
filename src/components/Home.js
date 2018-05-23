import React, {Component} from 'react';
import Post from './Post';
import {Link} from 'react-router-dom'
import BackgroundImg from '../realbackground.jpg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions'

class Home extends Component {

  postList = () => this.props.posts.map((post, i) => {
      let comments = this.props.comments.filter(comment => comment.postId === post.id)
      return (  <Post key={i} post={post} comments={comments}/>)
      }
  )

  render() {
    let homeStyle = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${BackgroundImg})`,
      paddingTop: '70px',
      position: 'absolute'
    }
    let listStyle = {
      height: '65%',
      overflowY: 'auto',
      marginTop: '10px'
    }

    return(
      <div>
        <div style={homeStyle}>
          <Link to="/newpost" style={{marginLeft: '46%'}}><button>New Post</button></Link>
          <div style={listStyle}>
          {this.postList()}
          </div>
          <div style={{color: 'white', marginLeft: '45%'}}>-Scroll for More-</div>
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
