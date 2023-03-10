import { FaRegUser } from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";
import classes from "./profileForm.module.css";
import { FiAtSign, FiLock } from "react-icons/fi";
import { useSession } from "next-auth/react";

const ProfileForm = () => {
  const {data: session} = useSession()

  const Style = {
    fontSize: "1.5rem",
  };
  return (
    <div className={classes["profile-form"]}>
      <form className={classes["user-details"]}>
        <div className={classes["form-group"]}>
          <label htmlFor="fullname">full name</label>
          <div className={classes["user-input"]}>
            <FaRegUser style={Style} />
            <input type="text" value={session?.user?.name} readOnly/>
          </div>

        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="username">username</label>
          <div className={classes["user-input"]}>
            <FiAtSign style={Style} />
            <input type="text" value={session?.user?.name} readOnly/>
          </div>
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="email">e-mail</label>
          <div className={classes["user-input"]}>
            <BsEnvelopeAt style={Style} />
            <input type="email" value={session?.user?.email} readOnly/>
          </div>
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="password">password</label>
          <div className={classes["user-input"]}>
            <FiLock style={Style} />
            <input type="password" value={1234567} readOnly/>
          </div>
          <span>change</span>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
