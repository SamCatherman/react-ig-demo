import React from "react";
import photosJson from "../db.json";

import Photo from "./Photo";

const Feed = () => {
  const photos = photosJson.map(photo => (
    <Photo photo={photo} key={photo._id} />
  ));
  return (
    <div className="ui column">
      <h2>I am the Feed</h2>
      {photos}
    </div>
  );
};

export default Feed;
