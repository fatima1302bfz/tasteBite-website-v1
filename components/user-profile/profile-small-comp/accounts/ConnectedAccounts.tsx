import { useSession } from "next-auth/react";
import React from "react";
import classes from "./connectedAccounts.module.css";

const ConnectedAccounts = () => {
  const {data: session} = useSession()
  return (
    <div className={classes["accounts"]}>
      <h3>connected accounts</h3>
      <ul className={classes["accounts-list"]}>
        <li>
          <div className={classes["account"]}>
            <div className={classes["account-logo"]}>{session?.user?.email}</div>
            {/* <p>fatima bkt</p> */}
          </div>
          <button className={classes["disconnect"]}>disconnect</button>
        </li>
      </ul>
    </div>
  );
};

export default ConnectedAccounts;
