import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return <input type="text" onKeyUp={this.props.onKeyUp} />;
  }
}

export default SearchBox;
