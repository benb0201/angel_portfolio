import React from "react";
import classes from "../styles/Projects.module.css";
import arrowIcon from "../../assets/arrow.png";
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";

const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <p className={classes.sectionTextP1}>Checkout my Recent</p>
      <h1 className={classes.title}>Projects</h1>
      <div className={classes.projectsDetailsContainer}>
        <div className={classes.projectsContainer}>
          <div
            className={`${classes.detailsContainer} ${classes.colorContainer}`}
          >
            <div className={classes.projectContainer}>
              <img
                src={project1}
                alt="Project 1"
                className={classes.projectImg}
              />
            </div>
            <h2
              className={`${classes.projectSubtitle} ${classes.projectTitle}`}
            >
              Project One
            </h2>
            <div className={classes.btnContainer}>
              <button
                className={`${classes.btn} ${classes.btnColor2} ${classes.projectBtn}`}
                onClick={() => (location.href = "https://github.com/")}
              >
                Github
              </button>
              <button
                className={`${classes.btn} ${classes.btnColor2} ${classes.projectBtn}`}
                onClick={() => (location.href = "https://github.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div
            className={`${classes.detailsContainer} ${classes.colorContainer}`}
          >
            <div className={classes.projectContainer}>
              <img
                src={project2}
                alt="Project 2"
                className={classes.projectImg}
              />
            </div>
            <h2
              className={`${classes.projectSubtitle} ${classes.projectTitle}`}
            >
              Project Two
            </h2>
            <div className={classes.btnContainer}>
              <button
                className={`${classes.btn} ${classes.btnColor2} ${classes.projectBtn}`}
                onClick={() => (location.href = "https://github.com/")}
              >
                Github
              </button>
              <button
                className={`${classes.btn} ${classes.btnColor2} ${classes.projectBtn}`}
                onClick={() => (location.href = "https://github.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div
            className={`${classes.detailsContainer} ${classes.colorContainer}`}
          >
            <div className={classes.projectContainer}>
              <img
                src={project3}
                alt="Project 3"
                className={classes.projectImg}
              />
            </div>
            <h2
              className={`${classes.projectSubtitle} ${classes.projectTitle}`}
            >
              Project Three
            </h2>
            <div className={classes.btnContainer}>
              <button
                className={`${classes.btn} ${classes.btnColor2} ${classes.projectBtn}`}
                onClick={() => (location.href = "https://github.com/")}
              >
                Github
              </button>
              <button
                className={`${classes.btn} ${classes.btnColor2} ${classes.projectBtn}`}
                onClick={() => (location.href = "https://github.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className={`${classes.arrow} ${classes.icon}`}
        onClick={() => (location.href = "./#contact")}
      />
    </section>
  );
};

export default Projects;
