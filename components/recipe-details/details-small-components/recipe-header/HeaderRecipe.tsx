import { RecipeType } from "@/types";
import { FaFeatherAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import classes from "./headerRecipe.module.css";
import { BsBookmark, BsBoxArrowUp } from "react-icons/bs";

interface Props {
  recipe: RecipeType;
}
const HeaderRecipe = ({ recipe }: Props) => {
  return (
    <div className={classes["header"]}>
      <div className={classes["info"]}>
        <h1>{recipe.title}</h1>
        <div className={classes["extra-info"]}>
          <ul>
            <li>
              <FaFeatherAlt />
              <span>{recipe.sourceName}</span>
            </li>
            <li>
              <AiOutlineHeart />
              <span>{recipe.aggregateLikes}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["bookmark"]}>
        <BsBoxArrowUp />
        <BsBookmark />
      </div>
    </div>
  );
};

export default HeaderRecipe;
