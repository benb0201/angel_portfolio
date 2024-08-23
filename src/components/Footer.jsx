import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className={classes.navLinksContainer}>
          <ul className={classes["nav-links"]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/content">Content</Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2024 Ben Obilom. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
