import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home, Schedule } from './pages';
import Header from './Header';
import 'normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/schedule" component={Schedule} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
