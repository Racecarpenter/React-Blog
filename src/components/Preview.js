import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import * as Actions from '../actions/actions'

class Preview extends Component {
  Comments = () => this.props.location.comments.map((comment, i) =>
     <li style={{border: '2px solid white', marginTop: '10px',backgroundColor:'lightblue', paddingLeft: '5%', marginRight: '10%'}} key={i}><span style={{fontSize: '16px', color: 'white', width: '25%', height:'25%', backgroundColor: 'lightblue', fontShadow: '1px 1px 1px black'}}>{comment.body}</span></li>
  )
  render() {
    let postAuthor = this.props.authors.filter(author => author.id === this.props.location.post.postId)


    console.log('comments', this.props.location.comments)
    return (<div className="card mb-3">
      <h3 className="card-header">{this.props.location.post.name}</h3>
      <div className="card-body">
        <h5 className="card-title">
          <Link to={{pathname:`/author/${postAuthor[0].id}`, author: {...postAuthor[0]}}}>
          by {postAuthor[0].name}
          </Link>
        </h5>
        <h6>Website:</h6>
        <a href={'http://www.' + postAuthor[0].website} className="card-subtitle text-muted">
          {postAuthor[0].website}</a>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 1}}></div>
      <img style={{
          maxHeight: "250px",
          maxWidth: "250px",
          resizeMode: 'contain',
          display: "block",
          flex: 3
        }} src={require("../ship.png")} alt=" "/>
      <div style={{display:'flex', width: '200px', flexDirection: 'column', flex: 2, marginLeft: '20px'}}>
        <div className="card-text" style={{flex: 1, fontSize: '24px'}}>
          <blockquote className="blockquote">
            <p className="mb-0">{this.props.location.post.body}</p>
          </blockquote>
        </div>
      </div>
      <div style={{flex: 1}}></div>
    </div>
    <div className="form-group" style={{display: 'flex', flexDirection: 'row'}}>
      <input className="form-control form-control-lg" type="text" placeholder="Comment Here" style={{flex: 7, marginLeft: '10%', width: '50%'}} id="inputLarge"/>
      <button type="button" style={{flex: 1, marginTop:'10px', paddingBottom:'5px',marginLeft: '5%'}} className="btn btn-primary">Submit</button>
    </div>
      <ul style={{marginTop: '2%', listStyle:'none'}}>
        <li className="success" style={{fontSize: '20px', fontWeight: 'bold'}}>Comments</li>
        {this.Comments()}
      </ul>
      <div className="card-body">
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
