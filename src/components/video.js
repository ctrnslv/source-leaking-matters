import React, { Component } from 'react';
import YouTube from 'react-youtube';

class VideoTest extends Component {
  render() {
    const opts = {
      height: '300',
      width: '580',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return <YouTube videoId="AyZNKILWF-U" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoTest;