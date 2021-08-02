import React, { useState, useEffect } from "react";
import Post from "../Post";
import "./Feed.css";
import TweetBox from "./TweetBox";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <h2 className="feed__header">Home</h2>
      <TweetBox />

      <Post
        displayName="Duey TP"
        username="Duey666overlord"
        verified={true}
        text="is this thing on?"
        avatar="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYv62SUx-d8ueCVGcqLEXI5uifHWn0nNNhhOxkh8vRDNmeTuU8"
        image="https://media.tenor.com/images/0b6584bd4c8d717d55aebab0ae16f1fb/tenor.gif"
      />
    </div>
  );
}

export default Feed;
