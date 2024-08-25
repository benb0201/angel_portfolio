import React from "react";
import classes from "../styles/Contact.module.css";
import email from "../../assets/email.png";
import linkedin from "../../assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <p className={classes.sectionTextP1}>Message Me Today</p>
      <h1 className={classes.title}>Let's Work Together</h1>
      <div className={classes.contactInfoUpperContainer}>
        <div className={classes.contactInfoContainer}>
          <img
            src={email}
            alt="Email icon"
            className={`${classes.icon} ${classes.contactIcon} ${classes.emailIcon}`}
          />
          <p>
            <a href="mailto:angelariyibi@gmail.com">Mail</a>
          </p>
        </div>
        <div className={classes.contactInfoContainer}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className={`${classes.icon} ${classes.contactIcon}`}
          />
          <p>
            <a href="https://www.linkedin.com/in/angelariyibi/">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
