import React from "react";
import classes from "./pagesHead.module.css";

interface Props {
  heading: string;
}
const PagesHead = ({heading}: Props) => {
  return (
    <div className={classes["page-head"]}>
      <h3>{heading}</h3>
    </div>
  );
};

export default PagesHead;
