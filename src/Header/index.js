import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <img className="hover-effect" src={logo} alt="Logo" />
        <ul>
          <li>
            <Link className="hover-effect" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover-effect" to="/schedule">
              Schedule
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
