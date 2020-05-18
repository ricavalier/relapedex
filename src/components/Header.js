import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <header>
        <h1><i className="fas fa-chart-line"></i> RelApdex</h1>
        <Nav />
      </header>
    );
  }
}

export default Header;
