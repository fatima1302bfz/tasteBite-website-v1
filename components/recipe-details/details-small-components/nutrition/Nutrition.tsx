import { RecipeType } from "@/types";
import classes from "./nutrition.module.css";

interface Props {
  recipe: RecipeType;
}
const Nutrition = ({ recipe }: Props) => {
  return (
    <div className={classes["nutrition"]}>
      <h3>nutrition facts</h3>
      <ul className={classes["nutri-list"]}>
        {recipe.nutritions.map((nutrition: any, index: number) => (
          <li key={index}>
            <span className={classes["fact"]}>{nutrition.fact}</span>
            <span className={classes["value"]}>{nutrition.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nutrition;
