import React, { Component } from 'react';
import EventList from '../EventList';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEventsLoaded: false,
      error: null,
      events: [],
      selected: []
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
      return <div>Error: {error.message}</div>;
    } else if (!isEventsLoaded) {
      return <div>Loading...</div>;
    } else {
      return <EventList events={events} />;
    }
  }
}

export default Schedule;
