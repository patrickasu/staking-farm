import React, { Component } from 'react'
import farmer from '../logo2.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar fixed-top flex-md-nowrap p-0 shadow navigationbar">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={farmer} width="90" height="40" className="d-inline-block align-top" alt="" />
          &nbsp;
        </a>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="stacking">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
