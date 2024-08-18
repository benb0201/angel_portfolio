import React from "react";
import classes from "./Landing.module.css";
import profilePic from "../../assets/profile-pic.jpg";
import resume from "../../assets/resume-example.pdf";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";

function Landing() {
  return (
    <section className={classes.profile}>
      <div className={classes.sectionPicContainer}>
        <img src={profilePic} alt="Angel profile pic" />
      </div>
      <div className={classes.sectionText}>
        <p className={classes.sectionTextP1}>Hello, I'm</p>
        <h1 className={classes.title}>Angel Ojoula</h1>
        <p className={classes.sectionTextP2}>
          "Inspiring early career students & professionals to elevate their
          mindsets, chase their dreams and become better versions of
          themselves."
        </p>
        <div className={classes.btnContainer}>
          <button
            className={`${classes.btn} ${classes.btnColor2}`}
            onClick={() => window.open(resume, "_blank")}
          >
            Download CV
          </button>
          <button
            className={`${classes.btn} ${classes.btnColor1}`}
            onClick={() => (location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div className={classes.socialContainer}>
          <img
            src={linkedIn}
            alt="My LinkedIn Profile"
            className={classes.icon}
            onClick={() => (location.href = "http://linkedin.com")}
          />
          <img
            src={github}
            alt="My Github Profile"
            className={classes.icon}
            onClick={() => (location.href = "http://github.com")}
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
