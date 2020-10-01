import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <header className="main-header">
        <nav className="nav main-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <h1 className="brand-name brand-name-large">SupaHotFood</h1>
      </header>
    );
  }
}

export default Navbar;
