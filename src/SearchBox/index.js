import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    return <input type="text" onKeyUp={this.props.onKeyUp} />;
  }
}

export default SearchBox;
