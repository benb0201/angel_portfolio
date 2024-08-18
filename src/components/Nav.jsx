import React, { useState } from "react";
import classes from "./Nav.module.css";

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
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
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
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
