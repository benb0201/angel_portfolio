import React from "react";
import classes from "../styles/Projects.module.css";
import arrowIcon from "../../assets/arrow.png";
import project2 from "../../assets/project-2.png";

const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <p className={classes.sectionTextP1}>Explore My</p>
      <h1 className={classes.title}>Content</h1>
      <div className={classes.projectsDetailsContainer}>
        <div className={classes.projectsContainer}>
          {/* TikTok Video 1 */}
          <div
            className={`${classes.detailsContainer} ${classes.colorContainer}`}
          >
            <div className={classes.projectContainer}>
              <iframe
                src="https://www.tiktok.com/embed/7365960866644233504"
                width="325"
                height="579"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <h2
              className={`${classes.projectSubtitle} ${classes.projectTitle}`}
            >
              TikTok Video: Application Season 2025 🏃🏾‍♀️
            </h2>
          </div>
          {/* TikTok Video 2 */}
          <div
            className={`${classes.detailsContainer} ${classes.colorContainer}`}
          >
            <div className={classes.projectContainer}>
              <iframe
                src="https://www.tiktok.com/embed/7093710250263514373"
                width="325"
                height="579"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <h2
              className={`${classes.projectSubtitle} ${classes.projectTitle}`}
            >
              TikTok Video: How My Wig Addiction Started 😍😂
            </h2>
          </div>

          {/* TikTok Video 3 */}
          <div
            className={`${classes.detailsContainer} ${classes.colorContainer}`}
          >
            <div className={classes.projectContainer}>
              <iframe
                src="https://www.tiktok.com/embed/7099456970792488197"
                width="325"
                height="579"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <h2
              className={`${classes.projectSubtitle} ${classes.projectTitle}`}
            >
              TikTok Video: Like Free? FREE? 🙆🏽‍♀️
            </h2>
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

export default Projects;
