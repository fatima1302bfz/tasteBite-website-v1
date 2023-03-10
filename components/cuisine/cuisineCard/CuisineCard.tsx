import React from "react";
import classes from "./cuisineCard.module.css";

interface Props {
  cuisine: {
    cuisine: string;
    image: string;
  };
}
const CuisineCard = ({ cuisine }: Props) => {
  return (
    <div className={classes["cuisineCard"]}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={cuisine.image} alt={cuisine.cuisine} />
      <h4> {cuisine.cuisine}</h4>
    </div>
  );
};

export default CuisineCard;
