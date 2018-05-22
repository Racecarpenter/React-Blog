import React, {Component} from 'react';
import Post from './Post';
import BackgroundImg from '../realbackground.jpg';

class Home extends Component {
  render() {
    let homeStyle = {
      width: '100%',
      height: '99vh',
      backgroundImage: `url(${BackgroundImg})`,
      paddingTop: '70px'
    }
    return(
      <div>
        <div style={homeStyle}>
          <Post/>
        </div>

      </div>
    )
  }
}

export default Home;
