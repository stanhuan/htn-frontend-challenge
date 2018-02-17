import React, { Component } from 'react';
import EventList from '../EventList';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEventsLoaded: false,
      error: null,
      events: []
    };
  }

  componentDidMount() {
    fetch('https://hackthenorth.com/fe-schedule.json')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isEventsLoaded: true,
            events: result
          });
        },
        error => {
          this.setState({
            isEventsLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isEventsLoaded, events } = this.state;
    if (error) {
      return (
        <div>
          <h1 className="inline-block">
            Please try again | Error: {error.message}
          </h1>
          <hr className="accent-seperator gutter-bottom--double" />
        </div>
      );
    } else if (!isEventsLoaded) {
      return (
        <div>
          <h1 className="inline-block">Loading Events...</h1>
          <hr className="accent-seperator gutter-bottom--double" />
        </div>
      );
    } else {
      return <EventList events={events} />;
    }
  }
}

export default Schedule;
