import React, {useContext} from "react";
import { BsPrinter } from "react-icons/bs";
import classes from "./cookingInfo.module.css";
import { RecipeCTX } from "@/pages/recipe/[id]";

const CookingInfoTable = () => {
const {recipe} = useContext(RecipeCTX)
  return (
    <div className={classes["prepartion-info"]}>
      <table>
        <thead>
          <tr>
            <td>cook Time</td>
            <td>serving</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{recipe?.readyInMinutes} min</td>
            <td>
              {recipe?.servings == 1
                ? recipe?.servings + " person"
                : recipe?.servings + " people"}
            </td>
            <td>{recipe?.pricePerServing}$</td>
          </tr>
        </tbody>
      </table>
      <span>
      <BsPrinter />
      </span>
    </div>
  );
};

export default CookingInfoTable;
