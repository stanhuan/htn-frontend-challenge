import React, { Component } from 'react';
import EventItem from '../EventItem';
import SearchBox from '../SearchBox';
import Tag from '../Tag';

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
  }

  handleKeyUp(e) {
    this.setState({ searchText: e.target.value });
  }

  handleClick(e) {
    let selectedTag = e.target.getAttribute('id');
    let selectedTags = this.state.selectedTags;

    if (selectedTags.includes(selectedTag)) {
      this.setState({
        selectedTags: selectedTags
          .slice(0, selectedTags.indexOf(selectedTag))
          .concat(selectedTags.slice(selectedTags.indexOf(selectedTag) + 1))
      });
    } else {
      this.setState({
        selectedTags: [].concat(selectedTags, selectedTag)
      });
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

  render() {
    let eventsToDisplay;

    if (this.state.viewAll) {
      eventsToDisplay = this.props.events;
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
        <EventItem key={item.id} event={item} tagInfo={this.tagInfo} />
      ));
    }

    return (
      <div className="EventList">
        <SearchBox onKeyUp={this.handleKeyUp.bind(this)} />
        {Object.keys(this.tagInfo).map(key => (
          <Tag
            key={key}
            id={key}
            tag={this.tagInfo[key]}
            selectable={true}
            onClick={this.handleClick.bind(this)}
            selected={this.state.selectedTags.includes(key)}
          />
        ))}
        <ol>{results}</ol>
      </div>
    );
  }
}

export default EventList;
