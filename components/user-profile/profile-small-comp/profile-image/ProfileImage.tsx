import React, { createRef, useState, useEffect } from "react";
import classes from "./profileImage.module.css";

const ProfileImage = () => {
  const [avatar, setAvatar] = useState<string>("");
  const fileRef = createRef<HTMLInputElement>();

  useEffect(() => {
    const storage = localStorage.getItem("avatarSrc");
    if (typeof window !== "undefined") {
      // @ts-ignore
      let avatarsrc = JSON.parse(storage);
      setAvatar(avatarsrc);
    }
  }, []);

  const onFileInputChange = (e: any) => {
    const file = e.target?.files?.[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file.preview);
    localStorage.setItem("avatarSrc", JSON.stringify(file.preview));
  };
  const handleDelete = () => {
    setTimeout(() => {
      setAvatar("");
      localStorage.setItem("avatarSrc", JSON.stringify(""));
    }, 1000);
  };

  return (
    <div className={classes["image-section"]}>
      {/*eslint-disable-next-line @next/next/no-img-element */}
      {avatar ? (
        <img src={avatar} alt="user-image"/>
      ) : (
        <img src="/avatar.png" alt="user-image"/>
      )}
      <div className={classes["controls"]}>
        <input
          type="file"
          ref={fileRef}
          onChange={onFileInputChange}
          accept="/image/*"
          style={{ display: "none" }}
        />
        <button
          className={classes["primary-btn"]}
          onClick={() => fileRef.current?.click()}
        >
          change photo
        </button>
        <button className="btn" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
