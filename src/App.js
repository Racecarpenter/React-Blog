import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Author from './components/Author'
import Comments from './components/Comments'
import Home from './components/Home'
import NewPost from './components/NewPost'
import Post from './components/Post'
import Preview from './components/Preview'

import * as Actions from './actions/actions'

import { Switch, Route, withRouter, Link } from 'react-router-dom'

class App extends Component {
   componentDidMount(){
     this.props.Actions.getPosts();
     this.props.Actions.getAuthors();
     this.props.Actions.getComments();
   }

  returnHome(e){
    e.preventDefault()
    this.props.history.replace('/')
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light">
          <button onClick={(e) => this.returnHome(e)} className="navbar-brand" style={{outline: 'none', border: 'none', fontWeight: 'bold', paddingLeft: 10, fontStyle: 'italic'}}>DAUNTLESS</button>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/post/:id" component={Preview}/>
          <Route exact path="/author" component={Author}/>
          <Route exact path="/post/new" component={NewPost}/>
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
return {
    Actions: bindActionCreators(Actions, dispatch)
  }
}
export default withRouter(connect(null, mapDispatchToProps)(App))
