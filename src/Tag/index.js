import React, { Component } from 'react';

class Tag extends Component {
  render() {
    if (this.props.selectable) {
      return (
        <button
          onClick={this.props.onClick}
          className={'tag'.concat(this.props.selected ? ' selected' : '')}
          id={this.props.id}
        >
          {this.props.tag}
        </button>
      );
    } else {
      return (
        <span className="tag" id={this.props.id}>
          {this.props.tag}
        </span>
      );
    }
  }
}

export default Tag;
