import React, { Component } from 'react';
import Tag from '../Tag';

class EventItem extends Component {
  render() {
    let event = this.props.event;

    return (
      <div className="event-item">
        <p>{event.title}</p>
        <p>{event.description}</p>
        <p>
          <time dateTime={event.start_time}>{event.start_time}</time> -{' '}
          <time dateTime={event.end_time}>{event.end_time}</time>
        </p>
        <p>{event.location}</p>
        <ul>
          {event.tags.map(item => (
            <Tag key={item} id={item} tag={this.props.tagInfo[item]} />
          ))}
        </ul>
        <button onClick={this.props.onClick} id={this.props.id}>
          {this.props.selected ? '-' : '+'}
        </button>
      </div>
    );
  }
}

export default EventItem;
