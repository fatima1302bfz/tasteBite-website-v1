import React from "react";
import { RecipeType } from "@/types";
import classes from "./cardItem.module.css";

interface Props {
  recipe: RecipeType;
}
const CardItem = ({ recipe }: Props) => {
  return (
    <div className={classes.card}>
      {recipe.image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={recipe?.image} alt={recipe?.title} />
          <h4>{recipe?.title}</h4>
        </>
      )}
    </div>
  );
};

export default CardItem;
