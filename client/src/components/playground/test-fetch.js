import React, { Component } from 'react';

class Fetching extends Component {
  constructor () {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount () {
    fetch('/api/video_list')
      .then(res => res.json())
      .then(data => this.setState({ data }, () => console.log('Video fetched ... ', data)));
  }
  render () {
    return (
      <div>
        <h1> Test fetched </h1>
        {this.state.data.map((data) => (
            <li key={ data.id }>
              { data.text }
            </li>
          )
        )}
      </div>
    );
  }
};

export default Fetching;
