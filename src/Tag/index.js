import React, { Component } from 'react';
import './tag.css';

class Tag extends Component {
  render() {
    if (this.props.selectable) {
      return (
        <button
          onClick={this.props.onClick}
          className={'tag hover-effect '
            .concat(this.props.id)
            .concat(this.props.selected ? ' selected' : '')}
          id={this.props.id}
        >
          {this.props.tag}
        </button>
      );
    } else {
      return (
        <span
          className={'tag selected '.concat(this.props.id)}
          id={this.props.id}
        >
          {this.props.tag}
        </span>
      );
    }
  }
}

export default Tag;
