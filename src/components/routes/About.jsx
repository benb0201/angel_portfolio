import React from "react";
import classes from "../styles/About.module.css";
import aboutPic from "../../assets/about-pic.jpg";
import aboutAudience from "../../assets/audience.jpg";
import aboutAudience2 from "../../assets/audience2.jpg";
import experienceIcon from "../../assets/experience.png";
import educationIcon from "../../assets/education.png";
import arrowIcon from "../../assets/arrow.png";

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.aboutMe}>
        <p className={classes.sectionTextP1}>Let Me Tell You</p>
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
                  src={educationIcon}
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
                I’m a content creator, who films her development journey as a
                MSc student in AI and data Science. My journey isn't just
                academic; it's a story of resilience-filled with ups and downs,
                challenges, failures and success. Through my content, I invite
                my audience into my life, offering not just a glimpse into my
                life but invaluable insights, opportunities, and advice that
                resonate with anyone navigating their own path of discovery and
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.aboutAudience}>
        <p className={classes.sectionTextP1}>Get To Know More</p>
        <h1 className={classes.title}>About My Audience</h1>
        <div className={classes.sectionContainer2}>
          <div className={classes.sectionPicContainer}>
            {/* <img
              src={aboutAudience}
              alt="About audience picture1"
              className={classes.aboutPic}
            /> */}
          </div>
          <div className={classes.sectionPicContainer}>
            <img
              src={aboutAudience2}
              alt="About audience picture1"
              className={classes.aboutPic}
            />
          </div>
          <div className={classes.aboutDetailsContainer}>
            <div className={classes.textContainer}>
              <p>
                My community and I explore the endless possibilities the world
                has to offer by learning from each other, and encouraging our
                selves to continuously develop. Their journey might just be
                beginning, and I'm here to inspire and guide them through every
                step of that way! I achieve this through storytelling, tried and
                trusted recommendations and more...
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className={`${classes.arrow} ${classes.icon}`}
        onClick={() => (location.href = "#contact")}
      />
    </section>
  );
};

export default About;
