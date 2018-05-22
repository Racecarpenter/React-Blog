import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions'
import BackgroundImg from '../realbackground.jpg';

class Preview extends Component {
  // Comments = () => this.props.location.comments.map((comment, i) =>
  //    <li key={i}>{comment.body}</li>
  // )
  render() {
    let homeStyle = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${BackgroundImg})`,
      paddingTop: '70px',
      position: 'absolute'
    }
    let postAuthor = this.props.authors.filter(author => author.id === this.props.location.post.postId)


    console.log('comments', this.props.location.comments)
    return (<div class="card mb-3">
      <h3 class="card-header">{this.props.location.post.name}</h3>
      <div class="card-body">
        <h5 class="card-title">by {postAuthor[0].name}</h5>
        <h6>Website:</h6>
        <a href={'http://www.' + postAuthor[0].website} class="card-subtitle text-muted">
          {postAuthor[0].website}</a>
      </div>
      <img style={{
          height: "200px",
          width: "200px",
          display: "block"
        }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image"/>
      <div class="card-body">
        <p class="card-text">{this.props.location.post.body}</p>
      </div>
      <ul class="list-group list-group-flush">
        {/* {this.Comments()} */}
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>)
  }
}
function mapStateToProps(state) {
  return {authors: state.Authors}
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Preview);
