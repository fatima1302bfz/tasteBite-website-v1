import classes from "./signout.module.css";
import { BsBoxArrowRight } from "react-icons/bs";
import { signOut } from "next-auth/react";

const Signout = () => {
  return (
    <div className={classes["signout"]}>
      <button className={classes["signout-btn"]} onClick={() => {
        signOut()
      }
      }>
        <BsBoxArrowRight />
        sign out
      </button>
      <button className={classes["delete-btn"]}>Delete account</button>
    </div>
  );
};

export default Signout;
