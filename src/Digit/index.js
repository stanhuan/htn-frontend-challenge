import React, { Component } from 'react';
import gear from '../gear.svg';
import './digit.css';

class Digit extends Component {
  render() {
    let denomination = this.props.denomination;
    if (this.props.value !== 1) {
      denomination = this.props.denomination.concat('s');
    }

    return (
      <div className="digit">
        <img className="bg" src={gear} alt="" />
        <p className="big-emphasis">{this.props.value}</p>
        <p className="kicker">{denomination}</p>
      </div>
    );
  }
}

export default Digit;
