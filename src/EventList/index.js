import React, { Component } from 'react';
import EventItem from '../EventItem';
import SearchBox from '../SearchBox';
import Tag from '../Tag';
var moment = require('moment');

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: null,
      selectedTags: [],
      selectedEvents: [],
      viewAll: true
    };
    this.tagInfo = {
      lightning_challenge: 'Lightning Challenge',
      talk: 'Talk',
      logistics: 'Logistics',
      workshop: 'Workshop',
      judging: 'Judging',
      food: 'Food',
      meetup: 'Meetup'
    };
    this.events = this.props.events.sort(function(a, b) {
      return moment.utc(a.start_time).diff(moment.utc(b.start_time));
    });
  }

  handleKeyUp(e) {
    this.setState({ searchText: e.target.value });
  }

  handleTagClick(e) {
    this.setState({
      selectedTags: this.toggleArray(
        this.state.selectedTags,
        e.target.getAttribute('id')
      )
    });
  }

  handleEventItemClick(e) {
    this.setState({
      selectedEvents: this.toggleArray(
        this.state.selectedEvents,
        Number(e.target.getAttribute('id'))
      )
    });
  }

  handleScheduleClick(e) {
    this.setState({
      viewAll: !this.state.viewAll
    });
  }

  toggleArray(list, item) {
    // Adds item to the list if it does not exist already, removes otherwise
    if (list.includes(item)) {
      return list
        .slice(0, list.indexOf(item))
        .concat(list.slice(list.indexOf(item) + 1));
    } else {
      return [].concat(list, item);
    }
  }

  filterByText(list, text) {
    return list.filter(item => {
      let searchString = `${item.title} ${item.location} `.toLowerCase();
      if (item.description) {
        searchString.concat(item.description);
      }

      return searchString.indexOf(text.toLowerCase()) > -1;
    });
  }

  filterByTags(list, tags) {
    return list.filter(item => {
      for (var i = 0; i < item.tags.length; i++) {
        if (tags.includes(item.tags[i])) {
          return true;
        }
      }
      return false;
    });
  }

  filterBySchedule(list, selected) {
    return list.filter(item => {
      return selected.includes(item.id);
    });
  }

  render() {
    let eventsToDisplay = this.events;

    if (!this.state.viewAll) {
      eventsToDisplay = this.filterBySchedule(
        eventsToDisplay,
        this.state.selectedEvents
      );
    }

    if (this.state.searchText) {
      eventsToDisplay = this.filterByText(
        eventsToDisplay,
        this.state.searchText
      );
    }

    if (this.state.selectedTags.length > 0) {
      eventsToDisplay = this.filterByTags(
        eventsToDisplay,
        this.state.selectedTags
      );
    }

    let results = <div>No items to display :(</div>;
    if (eventsToDisplay.length > 0) {
      results = eventsToDisplay.map(item => (
        <EventItem
          onClick={this.handleEventItemClick.bind(this)}
          selected={this.state.selectedEvents.includes(item.id)}
          key={item.id}
          id={item.id}
          event={item}
          tagInfo={this.tagInfo}
        />
      ));
    }

    return (
      <div className="EventList">
        <h1 className="inline-block">
          {this.state.viewAll ? 'All Events' : 'Selected Events'}
        </h1>
        <button
          className="secondary-link margin-left hover-effect"
          onClick={this.handleScheduleClick.bind(this)}
        >
          {!this.state.viewAll ? 'All Events' : 'Selected Events'}
        </button>
        <hr className="accent-seperator gutter-bottom--double" />
        <SearchBox onKeyUp={this.handleKeyUp.bind(this)} />
        {Object.keys(this.tagInfo).map(key => (
          <Tag
            key={key}
            id={key}
            tag={this.tagInfo[key]}
            selectable={true}
            onClick={this.handleTagClick.bind(this)}
            selected={this.state.selectedTags.includes(key)}
          />
        ))}
        <ol>{results}</ol>
      </div>
    );
  }
}

export default EventList;
