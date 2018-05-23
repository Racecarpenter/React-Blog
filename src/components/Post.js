import React from 'react'
import {Link} from 'react-router-dom'
import './CSS/post.css'

const Post = (props) => {
    let shortTitle = props.post.title.slice(0,15);
    let shortBody = props.post.body.slice(0,30)
    return (
      <div className="postStyle">
          <div className="card border-light mb-3">
              <img alt=" " style={{height: 50, width: 50, resizeMode: 'contain'}} src={require('../person-icon.png')}/>
            <Link to={{pathname:`/post/${props.post.id}`, post: {...props.post}, comments: [...props.comments]}}>
            (Click to Preview)
            </Link>
              <div className="card-body">
                <h4 className="card-title">{props.post.title.length > 15 ? `${shortTitle}...` : props.post.title}</h4>
                  <p className="card-text">{props.post.body.length > 30 ? `${shortBody}...` : props.post.body}</p>
                <ul className="list-group">
                </ul>
              </div>
          </div>
      </div>
    )
  }

export default Post;
