import React from "react";
import classes from "../styles/Engagement.module.css";
import comment1 from "../../assets/comment1.jpg";
import comment2 from "../../assets/comment2.jpg";
import comment3 from "../../assets/comment3.jpg";
import question1 from "../../assets/question1.jpg";
import question2 from "../../assets/question2.jpg";
import question3 from "../../assets/question3.jpg";

// /engage on url

const Engagement = () => {
  return (
    <section id="audience" className={classes.audience}>
      <p className={classes.sectionTextP1}>Debug My</p>
      <h1 className={classes.title}>Engagement</h1>
      <div className={classes.detailsContainer}>
        <h2 className={classes.experienceSubtitle}>Engagement</h2>
        <div className={classes.articleContainer2}>
          <article>
            <img src={comment2} alt="Comment2" className={classes.comment} />
          </article>
          <article>
            <img
              src={comment3}
              alt="Comment3"
              className={`${classes.comment} ${classes.comment3}`}
            />
          </article>
          <article>
            <img src={comment1} alt="Comment1" className={classes.comment} />
          </article>
        </div>
        <div className={classes.articleContainer2}>
          <article>
            <img
              src={question1}
              alt="Question 1"
              className={`${classes.comment} ${classes.question1}`}
            />
          </article>
          <article>
            <img src={question2} alt="Question 2" className={classes.comment} />
          </article>
          <article>
            <img src={question3} alt="Question 3" className={classes.comment} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
