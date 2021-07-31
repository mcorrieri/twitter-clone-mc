import React from "react";
import Post from "../Post";
import "./Feed.css";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      <h2 className="feed__header">Home</h2>
      <TweetBox />

      <Post />
    </div>
  );
}

export default Feed;
