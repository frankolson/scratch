// Vendor Assets
import React, { PureComponent } from 'react';

// Project Assets
import logo from '../logo.svg';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src={logo} className="header-logo" alt="logo" /> Scratch
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
