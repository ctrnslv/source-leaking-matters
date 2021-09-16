import React, { Component } from 'react';
import YouTube from 'react-youtube';

class ATvideo2  extends Component {
  render() {
    const opts = {
      height: '206',
      width: '400',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return <YouTube videoId="ZjqiPA39gBo" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default ATvideo2 ;