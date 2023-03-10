import React from "react";
import classes from "./describe.module.css";

interface Props {
  type: string | string[] | undefined;
}
const DescribeCuisine = ({ type }: Props) => {
  return (
    <div className={classes["description-content"]}>
      <div className={classes["text"]}>
        <h2>{type}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae
          perspiciatis, corporis at blanditiis possimus? Odit tempora maiores.
        </p>
      </div>
      <div className={classes["filter"]}>
        <select>
          <option value="opt0">Sort: </option>
          <option value="opt1">opt1</option>
          <option value="opt2">opt2</option>
          <option value="opt3">opt3</option>
        </select>
      </div>
    </div>
  );
};

export default DescribeCuisine;
