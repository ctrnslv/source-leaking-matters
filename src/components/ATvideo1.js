import React, { Component } from 'react';
import YouTube from 'react-youtube';

class ATvideo1  extends Component {
  render() {
    const opts = {
      height: '206',
      width: '400',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return <YouTube videoId="D0ZyB7qp1p8" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default ATvideo1 ;
