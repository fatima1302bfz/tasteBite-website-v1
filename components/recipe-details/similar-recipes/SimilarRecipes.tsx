import Link from "next/link";
import { useContext } from "react";
import { RecipeType } from "@/types";
import classes from "./similar.module.css";
import { AiOutlineLink } from "react-icons/ai";
import { RecipeCTX } from "@/pages/recipe/[id]";

const SimilarRecipes = () => {
  const { similar } = useContext(RecipeCTX);
  return (
    <section className={classes["more-recipes"]}>
      <div className="container">
        <h3>Similar Recipes</h3>
        <div className={classes["more-content"]}>
          {similar?.map((item: RecipeType) => (
            <Link
              href={`/recipe/${item.id}`}
              key={item.id}
              className={classes["card"]}
            >
              <AiOutlineLink /> <h5>{item.title}.</h5>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarRecipes;
