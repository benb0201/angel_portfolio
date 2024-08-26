import React from "react";
import classes from "../styles/Ebooks.module.css";

const Ebooks = () => {
  return (
    <section className={classes.ebooks}>
      <h1 className={classes.title}>Ebooks - Coming Soon</h1>
      <p className={classes.text}>
        We are currently working on our collection of ebooks. Check back later
        for resources and materials designed to help you grow!
      </p>
    </section>
  );
};

export default Ebooks;
