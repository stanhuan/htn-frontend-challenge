import React, { Component } from 'react';
import EventItem from '../EventItem';

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
      return (
        <ol>{events.map(item => <EventItem key={item.id} event={item} />)}</ol>
      );
    }
  }
}

export default Schedule;
