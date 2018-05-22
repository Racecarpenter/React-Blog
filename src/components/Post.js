import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Post extends Component {
  render(){
    let postStyle = {
      backgroundColor: 'white',
      fontSize: '24px',
      width: '50%',
      marginLeft: '25%'
    }
    return (
      <div style={postStyle}>
      <Link to="/author">To authors</Link>
      </div>
    )
  }
}

export default Post;
