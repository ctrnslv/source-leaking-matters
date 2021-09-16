import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Avid1  extends Component {
  render() {
    const opts = {
      height: '155',
      width: '300',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return <YouTube videoId="X7z20Bf84Yw" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Avid1 ;