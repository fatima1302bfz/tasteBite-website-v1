import Link from "next/link";
import { RecipeType } from "@/types";
import classes from "./details.module.css";
import CardItem from "../card-component/CardItem";
import DescribeCuisine from "./description/DescribeCuisine";

interface Props {
  recipes: RecipeType[];
  type: string | string[] | undefined;
}
const CuisineDetails = ({ recipes, type }: Props) => {
  return (
    <>
      <section className={classes["cuisine-details"]}>
       <div className="container">
       <DescribeCuisine type={type} />
        <div className={classes["type-wrapper"]}>
          {recipes?.map((recipe: RecipeType) => (
            <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
              <CardItem recipe={recipe} />
            </Link>
          ))}
        </div>
       </div>
      </section>
    </>
  );
};

export default CuisineDetails;
