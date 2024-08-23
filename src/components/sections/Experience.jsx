import React from "react";
import classes from "../styles/Experience.module.css";
import checkmark from "../../assets/checkmark.png";
import arrowIcon from "../../assets/arrow.png";

const Experience = () => {
  return (
    <section id="experience" className={classes.experience}>
      <p className={classes.sectionTextP1}>Explore My</p>
      <h1 className={classes.title}>Experience</h1>
      <div className={classes.experienceDetailsContainer}>
        <div className={classes.experienceContainer}>
          <div className={classes.detailsContainer}>
            <h2 className={classes.experienceSubtitle}>
              User Generated Content
            </h2>
            <div className={classes.articleContainer}>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className={classes.icon}
                />
                <div>
                  <h3>Insert Skill</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className={classes.icon}
                />
                <div>
                  <h3>Insert Skill</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className={classes.icon}
                />
                <div>
                  <h3>Insert Skill</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className={classes.icon}
                />
                <div>
                  <h3>Insert Skill</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          {/* <div className={classes.detailsContainer}>
            <h2 className={classes.experienceSubtitle}>Contracting</h2>
            <div className={classes.articleContainer}>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className={classes.icon}
                />
                <div>
                  <h3>Insert Skill</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className={classes.icon}
                />
                <div>
                  <h3>Insert Skill</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className={classes.icon}
                />
                <div>
                  <h3>Insert Skill</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  className={classes.icon}
                />
                <div>
                  <h3>Insert Skill</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div> */}
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className={`${classes.arrow} ${classes.icon}`}
        onClick={() => (location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;
