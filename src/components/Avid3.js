import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Avid3  extends Component {
  render() {
    const opts = {
      height: '155',
      width: '300',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return <YouTube videoId="RXRxx-AN1A4" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Avid3 ;