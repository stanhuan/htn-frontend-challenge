import React, { Component } from 'react';

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event
    };
  }

  render() {
    let event = this.state.event;
    return (
      <div className="event-item">
        <p>{event.title}</p>
        <p>{event.description}</p>
        <p>
          <time dateTime={event.start_time}>{event.start_time}</time> -{' '}
          <time dateTime={event.end_time}>{event.end_time}</time>
        </p>
        <p>{event.location}</p>
        <ul>{event.tags.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
    );
  }
}

export default EventItem;
