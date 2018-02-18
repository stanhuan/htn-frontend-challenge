import React, { Component } from 'react';
import Tag from '../Tag';
import Moment from 'react-moment';
import './eventitem.css';

class EventItem extends Component {
  isValidUrl(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return pattern.test(str);
  }

  render() {
    let event = this.props.event;
    let description = null;

    if (event.description) {
      description = <p className="field-text">{event.description}</p>;

      if (this.isValidUrl(event.description)) {
        description = (
          <a className="accent-color" target="_blank" href={event.description}>
            More information
          </a>
        );
      }
    }

    return (
      <div className="event-item">
        <div className="info">
          <p className="body-text">{event.title}</p>
          {description}
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
        <button
          className={'hover-effect '.concat(
            this.props.selected ? 'clicked' : ''
          )}
          onClick={this.props.onClick}
          id={this.props.id}
        >
          {this.props.selected ? 'x' : '+'}
        </button>
      </div>
    );
  }
}

export default EventItem;
