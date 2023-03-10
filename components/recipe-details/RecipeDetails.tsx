import React, { useContext } from "react";
import classes from "./recipe.module.css";
import { RecipeCTX } from "@/pages/recipe/[id]";
import Feedback from "./share-feedback/Feedback";
import Comments from "../comment-system/Comments";
import PostComment from "../post-comment/PostComment";
import RecipeMainContent from "./recipe-main-content/RecipeMainContent";
import HeaderRecipe from "./details-small-components/recipe-header/HeaderRecipe";
import CookingInfoTable from "./details-small-components/cookingInfoTable/CookingInfoTable";

const RecipeDetails = () => {
  const { recipe } = useContext(RecipeCTX);

  return (
    <>
      <section className={classes["recipe-details"]}>
        <div className="container">
          <HeaderRecipe recipe={recipe} />
          <div className={classes["details"]}>
            <div className={classes["description"]}>
              <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
              <div className={classes["recipe-image"]}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <CookingInfoTable />
            </div>
          </div>
        </div>
      </section>
      <RecipeMainContent />
      <Feedback />
      <Comments />
      <PostComment />
    </>
  );
};

export default RecipeDetails;
