import { CommentType } from "@/types";
import React from "react";
// @ts-ignore
import TimeAgo from "react-timeago";
import classes from "./singleComment.module.css";

interface Props {
  commentItem: CommentType;
}
const SingleComment = ({ commentItem }: Props) => {
  const { username, _createdAt, comment, userAvatar } = commentItem;
  return (
    <li className={classes["comment-post"]}>
      <div className={classes["comment-img"]}>
        <img src={userAvatar ? userAvatar : "/avatar.png"} alt="user-avatar" />
      </div>
      <div className={classes["comment-details"]}>
        <h5>
          <span className={classes["comment-author"]} id="user">
            {username}
          </span>
          <span className={classes["comment-time"]}>
            <TimeAgo date={_createdAt} />
          </span>
        </h5>
        <p className={classes["comment-content"]}>{comment}</p>
      </div>
    </li>
  );
};

export default SingleComment;
