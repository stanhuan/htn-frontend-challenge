import React, { Component } from 'react';
import Tag from '../Tag';
import Moment from 'react-moment';
import './eventitem.css';

class EventItem extends Component {
  render() {
    let event = this.props.event;

    return (
      <div className="event-item">
        <div className="info">
          <p className="body-text">{event.title}</p>
          <p className="field-text">{event.description}</p>
          <p className="field-text">
            <Moment format="dddd h:mma">{event.start_time}</Moment> -{' '}
            <Moment format="dddd h:mma">{event.end_time}</Moment>
          </p>
          <p className="field-text">{event.location}</p>
          <ul>
            {event.tags.map(item => (
              <Tag key={item} id={item} tag={this.props.tagInfo[item]} />
            ))}
          </ul>
        </div>
        <button onClick={this.props.onClick} id={this.props.id}>
          {this.props.selected ? '-' : '+'}
        </button>
      </div>
    );
  }
}

export default EventItem;
