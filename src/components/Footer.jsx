import React from "react";
import classes from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className={classes.navLinksContainer}>
          <ul className={classes["nav-links"]}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#brands">Brands</a>
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
      <p>Copyright &#169; 2024 Ben Obilom. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
