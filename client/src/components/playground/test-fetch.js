import React, { Component } from 'react';

class Fetching extends Component {
  constructor () {
    super();
    this.state = {
      videos: []
    };
  }
  componentDidMount () {
    fetch('/api/video_list')
      .then(res => res.json())
      .then(videos => this.setState({ videos }, () => console.log('Video fetched ... ', videos)));
  }
  render () {
    return (
      <div>
        {this.state.videos.map((video) => (
            <h1>{ video.id }</h1>
          )
        )}
      </div>
    );
  }
};

export default Fetching;
