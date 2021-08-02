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
        <Avatar src={avatar} />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>
              {displayName}
              <span className="header-specialtext">
                {verified && <VerifiedUser className="post-check" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="post-headerDesc">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="dragon-stealin" />
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
