import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import { Share, Timeline, Tweet } from "react-twitter-widgets";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widget-input">
        <SearchOutlined className="widget-search-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widget-container">
        <h2>What's happenin?</h2>
        <Tweet tweetId="841418541026877441" />
        <Tweet tweetId="841418541026877441" />
        <Tweet tweetId="841418541026877441" />

        <Timeline
          dataSource={{
            sourceType: "list",
            screenName: "reactjs",
          }}
          options={{
            height: "400",
          }}
        />
        <div className="share-btn">
          <Share />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
