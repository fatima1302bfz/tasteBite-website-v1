import React from "react";
import classes from "./feedback.module.css";

const Feedback = () => {
  return (
    <section className={classes["feedback"]}>
      <div className="container">
        <div className={classes["feed-content"]}>
        <h2>Already made this?</h2>
        <div className={classes["share-feedback"]}>
          <button className="btn">share your feedback</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
