import React, { Component } from 'react';
import Countdown from '../Countdown';

class Home extends Component {
  render() {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 2);

    return <Countdown targetDate={targetDate} />;
  }
}

export default Home;
