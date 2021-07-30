import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core/";

function TweetBox() {
  return (
    <div className="tweet-box">
      <form>
        <div className="tweetbox-input">
          <Avatar src="http://www.hot-dog.org/sites/default/files/gallery/regional/regional-B8-Steamed-Hot-Dog-Naked-HR.jpg" />
          <input placeholder="Whats going on chief?" type="text" />
        </div>
        <input
          className="tweet-image-input"
          placeholder="Enter image URL"
          type="text"
        />
        <Button className="tweet-box-btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
