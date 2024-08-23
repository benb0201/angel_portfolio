import React from "react";
import classes from "./Hero.module.css";
import profilePic from "../../assets/profile-pic.jpg";
import resume from "../../assets/resume.pdf";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import youtube from "../../assets/youtube.png";

function Hero() {
  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.sectionPicContainer}>
        <img src={profilePic} alt="Angel profile pic" />
      </div>
      <div className={classes.sectionText}>
        <p className={classes.sectionTextP1}>Hello, I'm</p>
        <h1 className={classes.title}>Angel</h1>
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
            onClick={() =>
              (location.href = "https://www.linkedin.com/in/angelariyibi/")
            }
          />
          <img
            src={github}
            alt="My Github Profile"
            className={classes.icon}
            onClick={() => (location.href = "http://github.com")}
          />
          <img
            src={tiktok}
            alt="My Tiktok Profile"
            className={classes.icon}
            onClick={() =>
              (location.href = "https://www.tiktok.com/@angelojuola")
            }
          />
          <img
            src={instagram}
            alt="My Instagram Profile"
            className={classes.icon}
            onClick={() =>
              (location.href = "https://www.instagram.com/angelojuola/")
            }
          />
          <img
            src={youtube}
            alt="My Youtube Profile"
            className={classes.icon}
            onClick={() =>
              (location.href = "https://www.youtube.com/@angelojuola")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
