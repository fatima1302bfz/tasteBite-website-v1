import { RecipeType } from "@/types";
import classes from "./ingredients.module.css";
import { RecipeCTX } from "@/pages/recipe/[id]";
import {useContext} from 'react'

const Ingredients = () => {
  const {recipe} = useContext(RecipeCTX)
  return (
    <div className={classes["ingred"]}>
      <h3>ingredients</h3>
      <ul className={classes["ingred-list"]}>
        {recipe?.extendedIngredients?.map((ingredient: any) => (
          <li key={ingredient.id}>
            <span></span>
            <p className={classes["ingred-item"]}>{ingredient.original}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
