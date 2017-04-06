import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div>
        <div className="App-title">Music master</div>
        <div>
          <input placeholder="search artist..."/>
          <button>Search</button>
        </div>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
