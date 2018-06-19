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
      <h1>hi</h1>
    );
  }
};

export default Fetching;
