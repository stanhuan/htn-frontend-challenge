import React, { Component } from 'react';
import EventItem from '../EventItem';
import SearchBox from '../SearchBox';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
      searchText: null,
      selected: [],
      viewAll: true
    };
  }

  handleKeyUp(e) {
    this.setState({ searchText: e.target.value });
  }

  render() {
    let eventsToDisplay;

    if (this.state.viewAll) {
      eventsToDisplay = this.state.events;
    }

    if (this.state.searchText) {
      eventsToDisplay = eventsToDisplay.filter(item => {
        let searchString = `${item.title} ${item.description} ${
          item.location
        }`.toLowerCase();

        return searchString.indexOf(this.state.searchText.toLowerCase()) > -1;
      });
    }

    return (
      <div className="EventList">
        <SearchBox onKeyUp={this.handleKeyUp.bind(this)} />
        <ol>
          {eventsToDisplay.map(item => (
            <EventItem key={item.id} event={item} />
          ))}
        </ol>
      </div>
    );
  }
}

export default EventList;
