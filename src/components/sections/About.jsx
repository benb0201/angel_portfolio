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
                  4+ years in Content Creation <br />
                  Over 2 years creating UGC content <br />
                  Over 1 year in public speaking
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
                {/* I’m a TikTok influencer and a AI & Data Scientist based in the UK. My
                journey through this field is more than academic—it’s a story of
                resilience, marked by challenges and successes. Through my
                content, I invite my audience into this journey, offering
                insights, opportunities, and advice that resonate with anyone
                navigating their journey toward personal and professional
                success. */}
                I'm a TikTok influencer and a AI & Data Science graduate, who is
                now a software product lead in the UK. My content invites
                viewers into my life, offering more than just a glimpse of life
                after university—it provides actionable insights, opportunities,
                and advice that resonate with anyone navigating their journey
                toward personal and professional success.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src={arrowIcon}
        alt="Arrow icon"
        className={`${classes.arrow} ${classes.icon}`}
        onClick={() => (location.href = "#contact")}
      /> */}
    </section>
  );
};

export default About;
