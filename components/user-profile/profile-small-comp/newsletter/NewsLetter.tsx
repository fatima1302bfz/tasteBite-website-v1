import React from "react";
import classes from "./newsletter.module.css";

const NewsLetter = () => {
  return (
    <div className={classes["newsletter"]}>
      <h3>newsletter</h3>
      <div className={classes["subscribe"]}>
        <p>You are currently subscribed to our newsletter</p>
        <button className="btn">unsubscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
