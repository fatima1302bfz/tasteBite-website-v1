import React from "react";
import classes from "./profile.module.css";
import PagesHead from "../some-pages-head/PagesHead";
import Signout from "./profile-small-comp/signout/Signout";
import ProfileForm from "./profile-small-comp/form/ProfileForm";
import NewsLetter from "./profile-small-comp/newsletter/NewsLetter";
import ProfileImage from "./profile-small-comp/profile-image/ProfileImage";
import ConnectedAccounts from "./profile-small-comp/accounts/ConnectedAccounts";

const UserProfile = () => {
  return (
    <section className={classes["profile-section"]}>
      <div className="container">
        <PagesHead heading={"Profile"} />
        <div className={classes["profile-wrapper"]}>
          <ProfileImage />
          <ProfileForm />
          <ConnectedAccounts />
          <NewsLetter />
          <Signout />
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
