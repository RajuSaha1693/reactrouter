/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
const Navbar = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <NavLink className="navbar-item" activeClassName="is-active" to="/">
            <img src={logo} width="112" height="28" alt="Brand" />
          </NavLink>
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && 'is-active'}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${isOpen && 'is-active'}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/news"
            >
              News
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
