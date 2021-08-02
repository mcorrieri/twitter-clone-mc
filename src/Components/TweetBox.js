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
        "https://gray-wect-prod.cdn.arcpublishing.com/resizer/BStc1ZLsidd3-Rs1T0KRZBsecBg=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/PNY6DS6G5RHZLL54TV6VMJQAVE.jpg",
    });
    setTweet("");
    setTweetImage("");
  };

  return (
    <div className="tweet-box">
      <form>
        <div className="tweetbox-input">
          <Avatar src="https://gray-wect-prod.cdn.arcpublishing.com/resizer/BStc1ZLsidd3-Rs1T0KRZBsecBg=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/PNY6DS6G5RHZLL54TV6VMJQAVE.jpg" />
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
