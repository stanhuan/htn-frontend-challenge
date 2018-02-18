import React, { Component } from 'react';
import Digit from '../Digit';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetDate: this.props.targetDate,
      secs: (this.props.targetDate - Date.now()) / 1000
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.countdown.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getIntervalObject(secs) {
    const SEC_IN_MIN = 60;
    const SEC_IN_HOUR = SEC_IN_MIN * 60;

    let h = Math.floor(secs / SEC_IN_HOUR);
    let m = Math.floor((secs - h * SEC_IN_HOUR) / SEC_IN_MIN);
    let s = Math.floor(secs - h * SEC_IN_HOUR - m * SEC_IN_MIN);

    return {
      hour: h,
      minute: m,
      second: s
    };
  }

  countdown() {
    if (this.state.secs) {
      this.setState({ secs: this.state.secs - 1 });
    } else {
      this.timer = null;
    }
  }

  render() {
    let time = this.getIntervalObject(this.state.secs);

    return (
      <div>
        <h1>We can't wait to meet you</h1>
        <hr className="accent-seperator" />
        <div className="digit-wrapper">
          {Object.keys(time).map(key => (
            <Digit key={key} denomination={key} value={time[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default Countdown;
