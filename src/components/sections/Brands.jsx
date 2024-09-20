import React from "react";
import classes from "../styles/Brands.module.css";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/arrow.png";
import amazon from "../../assets/amazon.png";
import plum from "../../assets/plum.png";
import adobe from "../../assets/adobe.png";
import helloFresh from "../../assets/helloFresh.png";
import vhi from "../../assets/vhi.png";

const Brands = () => {
  return (
    <section id="brands" className={classes.brands}>
      <p className={classes.sectionTextP1}>Trusted By</p>
      <h1 className={classes.title}>Brands I've Worked With</h1>
      <div className={classes.brandsContainer}>
        <div className={classes.brand}>
          <img src={amazon} alt="Amazon Logo" className={classes.brandLogo} />
        </div>
        <div className={classes.brand}>
          <img src={plum} alt="Plum Logo" className={classes.brandLogo} />
        </div>
        <div className={classes.brand}>
          <img src={adobe} alt="Adobe Logo" className={classes.brandLogo} />
        </div>
        <div className={classes.brand}>
          <img
            src={helloFresh}
            alt="Hello Fresh Logo"
            className={classes.brandLogo}
          />
        </div>
        <div className={classes.brand}>
          <img src={vhi} alt="VHI Logo" className={classes.brandLogo} />
        </div>
        {/* Add more brand logos as needed */}
      </div>
      <div className={classes.sectionText}>
        <p className={classes.sectionTextP2}>
          I have offered my content creation services to brands for over 2
          years. <br />
          Go to my <Link to="/content">Promotional Services</Link> page to learn
          more.
        </p>
        <p className={classes.sectionTextP2}>
          <br />
          Find below, some examples of my videos:
        </p>
      </div>
      {/* <img
        src={arrowIcon}
        alt="Arrow icon"
        className={`${classes.arrow} ${classes.icon}`}
        onClick={() => (location.href = "./#contact")}
      /> */}
    </section>
  );
};

export default Brands;
