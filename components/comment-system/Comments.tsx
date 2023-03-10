import { CommentType } from "@/types";
import classes from "./comments.module.css";
import { RecipeCTX } from "@/pages/recipe/[id]";
import React, { useState, useContext } from "react";
import SingleComment from "./single-comment/SingleComment";

const Comments = () => {
  const { comments } = useContext(RecipeCTX);

  const nbCommentToShow = 2;
  const [loadMore, setLoadMore] = useState(nbCommentToShow);
  const handleMore = () => {
    setLoadMore(loadMore + nbCommentToShow);
  };
  
  return (
    <section className={classes.comments}>
      <div className="container">
        <h2>
          Comments <span>({comments?.length})</span>
        </h2>
        {comments?.length > 0 ? (
          <>
            <ul className={classes["comments-list"]}>
              {comments?.slice(0, loadMore)?.map((commentItem: CommentType) => (
                <SingleComment
                  key={commentItem?._id}
                  commentItem={commentItem}
                />
              ))}
            </ul>
            {comments?.length > loadMore && (
              <div className={classes["more"]}>
                <button className={classes["btn"]} onClick={handleMore}>
                  load more
                </button>
              </div>
            )}
          </>
        ) : (
          <p> No comment here, Be the first one who comment on this post. </p>
        )}
      </div>
    </section>
  );
};

export default Comments;
