import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  authButton() {
    return <button className="btn btn-success">SIGN IN</button>
  }

  render() {
    return(
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">RESOURCES</Link>
          </li>
          <li className="nav-item">
            { this.authButton() }
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;
