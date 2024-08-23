import React from "react";
import classes from "../styles/About.module.css";
import aboutPic from "../../assets/about-pic.jpg";
import experienceIcon from "../../assets/experience.png";
import arrowIcon from "../../assets/arrow.png";

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <p className={classes.sectionTextP1}>Get To Know More</p>
      <h1 className={classes.title}>About Me</h1>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionPicContainer}>
          <img
            src={aboutPic}
            alt="About picture"
            className={classes.aboutPic}
          />
        </div>
        <div className={classes.aboutDetailsContainer}>
          <div className={classes.aboutContainers}>
            <div className={classes.detailsContainer}>
              <img
                src={experienceIcon}
                alt="experience icon"
                className={classes.icon}
              />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Product Management
              </p>
            </div>
            <div className={classes.detailsContainer}>
              <img
                src={experienceIcon}
                alt="experience icon"
                className={classes.icon}
              />
              <h3>Education</h3>
              <p>
                B.Sc. Bachelors Degree <br />
                M.Sc. Masters Degree
              </p>
            </div>
          </div>
          <div className={classes.textContainer}>
            <p>
              My community and I explore the endless possibilities the world has
              to offer by learning from each other, and encouraging our selves
              to continuously develop. Their journey might just be beginning,
              and I'm here to inspire and guide them through every step of that
              way! I achieve this through storytelling, tried and trusted
              recommendations and more...
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className={`${classes.arrow} ${classes.icon}`}
        onClick={() => (location.href = "./#brands")}
      />
    </section>
  );
};

export default About;
