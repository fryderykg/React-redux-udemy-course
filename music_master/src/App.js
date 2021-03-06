import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search() {
    const BASE_URL = "https://api.spotify.com/v1/search?";
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = "https://api.spotify.com/v1/artists";

    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({artist: artist});

      FETCH_URL = `${ALBUM_URL}/${artist.id}/top-tracks?country=PL&`;
      fetch(FETCH_URL, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => {
          const { tracks } = json; // is equal to const tracks = json.tracks;
          this.setState({tracks}) // is equal to this.setState({tracks: tracks})

        })

    })
  }

  render() {
    return(
      <div className="App">
        <div className="App-title">Music master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for the Artist"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null
            ? <div>
                <Profile
                  artist={this.state.artist}
                />
                <Gallery
                  tracks={this.state.tracks}
                />
              </div>
            : <div></div>
        }

      </div>
    )
  }
}

export default App;
