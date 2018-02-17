import React, { Component } from 'react';
import './searchbox.css';

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search"
        placeholder="Search"
        type="text"
        onKeyUp={this.props.onKeyUp}
      />
    );
  }
}

export default SearchBox;
