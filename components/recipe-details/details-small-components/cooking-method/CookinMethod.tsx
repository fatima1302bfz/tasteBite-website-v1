import React, { useContext } from "react";
import { RecipeType } from "@/types";
import classes from "./cookingMethod.module.css";
import { RecipeCTX } from "@/pages/recipe/[id]";
const CookinMethod = () => {
  const {recipe} = useContext(RecipeCTX)
  return (
    <div className={classes["method"]}>
      <h3>instructions</h3>
      <div className={classes["instruction"]}>
        <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
      </div>
    </div>
  );
};

export default CookinMethod;
