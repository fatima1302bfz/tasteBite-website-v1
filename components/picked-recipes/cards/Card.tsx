import React from "react";
import { RecipeType } from "@/types";
import classes from "./card.module.css";

interface Props {
  recipe: RecipeType;
}
const Card = ({ recipe }: Props) => {
  return (
    <>
      {recipe.image && (
        <div className={classes["card"]}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={recipe?.image} alt={recipe.title} />
          <h4>{recipe.title}</h4>
        </div>
      )}
    </>
  );
};

export default Card;
