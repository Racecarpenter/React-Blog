import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" style={
              { fontSize: '44px',
                fontFamily: 'italic',
                fontStyle: 'italic'
              }
            }>INTREPID</a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
