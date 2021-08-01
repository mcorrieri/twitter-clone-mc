import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import { Timeline, Tweet } from "react-twitter-widgets";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widget-input">
        <SearchOutlined className="widget-search-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widget-container"></div>
      <h2>What's happenin?</h2>
      <Tweet tweetId="841418541026877441" />
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "katyperry",
        }}
        options={{
          height: "400",
        }}
      />
    </div>
  );
}

export default Widgets;
