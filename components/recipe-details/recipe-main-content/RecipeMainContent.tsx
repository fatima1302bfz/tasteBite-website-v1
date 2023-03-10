import classes from "./recipe-main-content.module.css";
import SimilarRecipes from "../similar-recipes/SimilarRecipes";
import Ingredients from "../details-small-components/ingredients/Ingredients";
import CookinMethod from "../details-small-components/cooking-method/CookinMethod";

const RecipeMainContent = () => {

  return (
    <section className={classes["main-content"]}>
      <div className="container">
        <div className={classes["main"]}>
          <div className={classes["cooking-steps"]}>
            <Ingredients />
            <CookinMethod />
          </div>
          <SimilarRecipes />
        </div>
      </div>
    </section>
  );
};

export default RecipeMainContent;
