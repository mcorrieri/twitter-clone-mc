import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";

function Post({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE4MDAzNDEwNzMzODYwMzY2/robert-downey-jr-9542052-1-402.jpg" />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>
              Michael Downey Jr.
              <span className="header-specialtext">
                <VerifiedUser className="post-check" /> @OxfordUniversity
              </span>
            </h3>
          </div>
          <div className="post-headerDesc">
            <p>I am a real man! THATS MY REAL LAST NAME</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/3otPoV0fCxHdsSbZAc/giphy.gif"
          alt="dragon-stealin"
        />
        <div className="post-footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorderOutlined fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
