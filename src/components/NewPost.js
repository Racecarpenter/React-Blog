import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import * as Actions from '../actions/actions'

class NewPost extends Component {
  constructor(){
    super()

    this.newPost = this.newPost.bind(this)
    this.state = {
      title: '',
      body: ''
    }
  }

  newPost(){
    let { title, body } = this.state

    this.props.Actions.addPost({userId: 1, title, body})
  }

  update({target: { value }}, field){
    field === 'body' ? this.setState({body: value}) :
    this.setState({title: value})
  }
  render() {
    let { title, body } = this.state
    return (<div>
      <div className="card bg-light mb-3" style={{
          marginLeft: '25%',
          maxWidth: '50%'
        }}>
        <div className="card-header">New Post</div>
        <div className="card-body">
          <form>
            <fieldset>
              <div className="form-group">
                <label>Title</label>
                <input type="text" value={title} className="form-control" placeholder="title"
                onChange={(e) => this.update(e, 'title')}/>
              </div>
              <div className="form-group">
                <label>Body</label>
                <input type="text" value={body} className="form-control" placeholder="body"
                onChange={(e) => this.update(e, 'body')}/>
              </div>
              <button type="button" onClick={this.newPost} className="btn btn-primary btn-sm">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>)
  }
}


function mapDispatchToProps(dispatch) {
 return {
   Actions: bindActionCreators(Actions, dispatch)
 }
}
export default connect(null, mapDispatchToProps)(NewPost);
