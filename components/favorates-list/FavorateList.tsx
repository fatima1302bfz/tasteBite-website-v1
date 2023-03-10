import classes from "./favorates.module.css";
import PagesHead from "../some-pages-head/PagesHead";
import Controls from "./small-pieces-comp/controls/Controls";

const FavorateList = () => {
//   const myFavorate = localStorage.getItem("myFavorate") ?? [];

  return (
    <section className={classes["favorate"]}>
      <div className="container">
        <PagesHead heading={"favorate"} />
        <div className={classes["wrapper"]}>
          <Controls nbTotalFav={myFavorate.length} />
        </div>
      </div>
    </section>
  );
};

export default FavorateList;
