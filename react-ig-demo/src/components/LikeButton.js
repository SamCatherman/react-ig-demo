import React from "react";

const LikeButton = props => {
  return (
    <button onClick={props.likePhoto}>
      <span role="img" aria-label="heart">
        💙
      </span>
    </button>
  );
};
export default LikeButton;
