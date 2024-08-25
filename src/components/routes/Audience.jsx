import React from "react";
import classes from "../styles/Audience.module.css";
import checkmark from "../../assets/checkmark.png";
import arrowIcon from "../../assets/arrow.png";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import age from "../../assets/age.png";
import region from "../../assets/region.png";
import comment1 from "../../assets/comment1.jpg";
import comment2 from "../../assets/comment2.jpg";
import comment3 from "../../assets/comment3.jpg";
import question1 from "../../assets/question1.jpg";
import question2 from "../../assets/question2.jpg";
import question3 from "../../assets/question3.jpg";

const Audience = () => {
  return (
    <section id="audience" className={classes.audience}>
      <p className={classes.sectionTextP1}>Discover My</p>
      <h1 className={classes.title}>Audience</h1>
      <div className={classes.experienceDetailsContainer}>
        <div className={classes.experienceContainer}>
          <div className={classes.detailsContainer}>
            <h2 className={classes.experienceSubtitle}>Demographic</h2>
            <div className={classes.articleContainer}>
              <article>
                <img src={age} alt="Age icon" className={classes.icon} />
                <div>
                  <h3>Age</h3>
                  <p>18-34 (53%)</p>
                  <p>26-34 (33%)</p>
                </div>
              </article>
              <article>
                <img src={female} alt="Female icon" className={classes.icon} />
                <div>
                  <h3>Gender</h3>
                  <p>Female (77%)</p>
                  <p>Male (23%)</p>
                </div>
              </article>
              <article>
                <img src={region} alt="Region icon" className={classes.icon} />
                <div>
                  <h3>Region</h3>
                  <p>USA (39.4%)</p>
                  <p>UK (29.3%)</p>
                </div>
              </article>
            </div>
          </div>
          <div className={classes.detailsContainer}>
            <h2 className={classes.experienceSubtitle}>Feedback</h2>
            <div className={classes.articleContainer2}>
              <article>
                <img
                  src={comment2}
                  alt="Comment2"
                  className={classes.comment}
                />
              </article>
              <article>
                <img
                  src={comment3}
                  alt="Comment3"
                  className={classes.comment}
                />
              </article>
              <article>
                <img
                  src={comment1}
                  alt="Comment1"
                  className={classes.comment}
                />
              </article>
            </div>
          </div>
          <div className={classes.detailsContainer}>
            <h2 className={classes.experienceSubtitle}>Questions</h2>
            <div className={classes.articleContainer2}>
              <article>
                <img
                  src={question1}
                  alt="Question 1"
                  className={classes.comment}
                />
              </article>
              <article>
                <img
                  src={question2}
                  alt="Question 2"
                  className={classes.comment}
                />
              </article>
              <article>
                <img
                  src={question3}
                  alt="Question 3"
                  className={classes.comment}
                />
              </article>
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

export default Audience;
