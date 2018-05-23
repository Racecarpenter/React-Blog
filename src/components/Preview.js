import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import * as Actions from '../actions/actions'
import './CSS/preview.css'
class Preview extends Component {
  constructor() {
    super()
    this.state = {
      body: ''
    }
  }
  postComments = () => this.props.comments.filter(comment => comment.postId == this.props.match.params.id);

  CommentList = () => this.postComments().map((comment, i) => <li className="commentLi" key={i}>
    <span className="commentBody">{comment.body}</span>
  </li>)

  updateComment({ target: { value } }, field) { field === 'body' ? this.setState({body: value}) : null  }

  submit(e) {
    e.preventDefault()

    let {body} = this.state
    this.setState({body: ''})
    this.props.Actions.addComment({postId:this.props.match.params.id, name: '', body: body, userId: 11, email: 'Anonymous'})
  }

  render() {
    let {body} = this.state
    let postAuthor = this.props.authors.filter(author => author.id === this.props.location.post.userId)

    console.log('comments', postAuthor)
    return (<div className="card mb-3">
      <h3 className="card-header">{this.props.location.post.title}</h3>
      <div className="card-body">
        <h5 className="card-title">
          {
            this.props.location.post.userId === 0 ?
              <p>Anonymous</p> :
              <Link to={{
                    pathname: `/author/${postAuthor[0].id}`,
                    author: {...postAuthor}
                  }}>
                  by {postAuthor[0].name}
                </Link>
          }
        </h5>
      </div>
      <div className="flexRow">
        <div style={{flex: 1}}>
          <Link to="/"><button type="button" style={{marginLeft: '15%'}} className="btn btn-outline-secondary btn-sm">Home</button></Link>
        </div>
        <img className="lrgImg" src={require("../ship.png")} alt=" "/>
          <div className="body">
            <div className=" card-text" style={{flex: 1, fontSize: '24px'}}>
              <blockquote className="blockquote">
                <p className="mb-0">{this.props.location.post.body}</p>
              </blockquote>
            </div>
          </div>
        <div style={{flex: 1}}></div>
      </div>
  <div className="form-group flexRow">
    <input className="form-control form-control-lg commentInput"
          type="text"
          placeholder="Comment Here"
          value={body}
          onChange={(e) => this.updateComment(e, 'body')}/>
    <button type="button"
            onClick={(e) => this.submit(e)}
            className="btn btn-primary submitButton btn-sm">Submit</button>
  </div>
  <ul className="commentListStyle">
    <li className="success commentsTitle">
      Comments
    </li>
    {this.CommentList()}
  </ul>
</div>)
  }
}
function mapStateToProps(state) {
  return {authors: state.Authors, comments: state.Comments}
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Preview);
