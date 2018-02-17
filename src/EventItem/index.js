import React, { Component } from 'react';
import Tag from '../Tag';
import Moment from 'react-moment';

class EventItem extends Component {
  render() {
    let event = this.props.event;

    return (
      <div className="event-item">
        <p>{event.title}</p>
        <p>{event.description}</p>
        <p>
          <Moment format="dddd h:mma">{event.start_time}</Moment> -{' '}
          <Moment format="dddd h:mma">{event.end_time}</Moment>
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
