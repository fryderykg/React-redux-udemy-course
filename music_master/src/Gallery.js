import React, { Component } from 'react';
import './App.css'

export default class Gallery extends Component {
  render() {
    console.log('gallery props', this.props);
    const { tracks } = this.props;
    return(
      <div>
        {tracks.map((track, index) => {
          const trackImg = track.album.images[0].url;
          return (
            <div key={index} className="track">
              <img src={trackImg} alt="track" className="track-img"/>
              <p className="track-text">
                {track.name}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}