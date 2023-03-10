import { CommentBody } from "@/types";
import { useSession } from "next-auth/react";
import React, { useState, useContext } from "react";
import classes from "./post-comment.module.css";
import { Toaster, toast } from "react-hot-toast";
import { RecipeCTX } from "@/pages/recipe/[id]";

const PostComment = () => {
  const { recipe, refreshComments } = useContext(RecipeCTX);
  const [commentText, setCommentText] = useState<string>("");
  const { data: session } = useSession();
  // submit new comment
  const addCommentHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const newComment: CommentBody = {
      recipeID: `${recipe.id}`,
      username: session?.user?.name || "Unkown User",
      userAvatar: session?.user?.image || "/avatar.png",
      comment: commentText,
      blockComment: false,
    };
    const sendCommentToServer = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/api/createComment`,
      {
        method: "POST",
        body: JSON.stringify(newComment),
      }
    );
    toast.success("Comment added with success!", {
      style: {
        border: '1px solid green',
        padding: '26px',
        color: 'green',
        width: '250px',
        height: '90px'
      },
      iconTheme: {
        primary: 'green',
        secondary: '#FFFAEE',
      },
    });
    refreshComments();
    setCommentText("");

  };

  return (
    <section className={classes["post-comment"]}>
      <div className="container">
        <div className={classes["header"]}>
          <h3>write a comment</h3>
        </div>
        {session ? (
          <form className={classes["comment-form"]}>
            <textarea
              name="postComment"
              value={commentText}
              onChange={(e) => setCommentText(e?.target?.value)}
            ></textarea>
            <button
              disabled={!commentText}
              onClick={addCommentHandler}
              type="submit"
              className={classes["post-btn"]}
            >
              post comment
            </button>
          </form>
        ) : (
          <p className={classes["post-condition"]}>
            <a href="#">login</a> to post a comment
          </p>
        )}
      </div>
      <Toaster position="bottom-center" reverseOrder={true} />
    </section>
  );
};

export default PostComment;
