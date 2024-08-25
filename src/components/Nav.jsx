import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./styles/Nav.module.css";

const Nav = () => {
  // State to track if the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      {/* Desktop Navigation */}
      <nav className={classes["desktop-nav"]}>
        <div className={classes.logo}>Angel Ojuola</div>
        <div>
          <ul className={classes["nav-links"]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/audience">My Audience</Link>
            </li>
            <li>
              <Link to="/content">Collaboration</Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile (Hamburger) Navigation */}
      <nav className={classes["hamburger-nav"]}>
        <div className={classes.logo}>Angel Ojuola</div>
        <div className={classes["hamburger-menu"]}>
          <div
            className={`${classes["hamburger-icon"]} ${
              menuOpen ? classes.open : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* Conditionally apply the 'open' class to show/hide the menu */}
          <div
            className={`${classes["menu-links"]} ${
              menuOpen ? classes.open : ""
            }`}
          >
            {/* Menu Items */}
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/audience" onClick={toggleMenu}>
                My Audience
              </Link>
            </li>
            <li>
              <Link to="/content" onClick={toggleMenu}>
                Collaboration
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
