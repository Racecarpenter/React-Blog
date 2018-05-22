import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions'
import BackgroundImg from '../realbackground.jpg';

class Preview extends Component {
  render() {
    let homeStyle = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${BackgroundImg})`,
      paddingTop: '70px',
      position: 'absolute'
    }
    console.log('preview props', this.props)
    return (
      <div style={homeStyle}>{this.props.name}</div>
    )
  }
}

function mapDispatchToProps(dispatch) {
 return {
   Actions: bindActionCreators(Actions, dispatch)
 }
}
export default connect(null, mapDispatchToProps)(Preview);
