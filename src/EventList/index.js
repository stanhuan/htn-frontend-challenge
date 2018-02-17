import React, { Component } from 'react';
import EventItem from '../EventItem';
import SearchBox from '../SearchBox';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events
    };
  }

  handleKeyPress() {
    console.log('key pressed!');
  }

  render() {
    return (
      <div className="EventList">
        <SearchBox onKeyPress={() => this.handleKeyPress()} />
        <ol>
          {this.state.events.map(item => (
            <EventItem key={item.id} event={item} />
          ))}
        </ol>
      </div>
    );
  }
}

export default EventList;
