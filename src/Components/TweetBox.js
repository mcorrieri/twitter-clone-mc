import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core/";
import db from "./firebase";

function TweetBox() {
  const [tweet, setTweet] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Duey Tait Pastor",
      username: "JCLover4000",
      verified: true,
      text: tweet,
      image: tweetImage,
      avatar:
        "http://www.hot-dog.org/sites/default/files/gallery/regional/regional-B8-Steamed-Hot-Dog-Naked-HR.jpg",
    });
    setTweet("");
    setTweetImage("");
  };

  return (
    <div className="tweet-box">
      <form>
        <div className="tweetbox-input">
          <Avatar src="http://www.hot-dog.org/sites/default/files/gallery/regional/regional-B8-Steamed-Hot-Dog-Naked-HR.jpg" />
          <input
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            placeholder="Whats going on chief?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweet-image-input"
          placeholder="Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} className="tweet-box-btn">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
