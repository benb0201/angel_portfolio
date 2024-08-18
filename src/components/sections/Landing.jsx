import classes from "./Landing.module.css";

function Landing(props) {
  return (
    <div className={classes.landing}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
}

export default Landing;
