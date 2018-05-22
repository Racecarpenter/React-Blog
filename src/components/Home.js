import React, {Component} from 'react';
import Post from './Post';
import BackgroundImg from '../realbackground.jpg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(){
    super()
  }
  // postList = () => this.props.posts.map((post) => {
  //   let comments = this.props.comments.filter(c => c.postId === post.id)
  //   return (<Post key={post.id} {...post} comments={comments}/>)
  // })
  render() {
    console.log('props', this.state)
    let homeStyle = {
      width: '100%',
      height: '99vh',
      backgroundImage: `url(${BackgroundImg})`,
      paddingTop: '70px'
    }

    return(
      <div>
        <div style={homeStyle}>
          {/* {this.postList()} */}
        </div>

      </div>
    )
  }
}

function mapStateToProps (state) {
   return {
     posts: state.posts,
     comments: state.comments
   }
 }
function mapDispatchToProps(dispatch) {
 return {

 }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
