import React from "react";
import CommentBox from "./CommentBox";
import LikeButton from "./LikeButton";

const FeedbackSubmit = props => {
  return (
    <div>
      <CommentBox />
      <LikeButton likePhoto={props.handleLikesClick} />
    </div>
  );
};

export default FeedbackSubmit;
