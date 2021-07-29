import React from "react";
import SidebarOptions from "./SidebarOptions";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOptions Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={ExploreIcon} text="Explore" />
      <SidebarOptions Icon={NotificationsIcon} text="Notifications" />
      <SidebarOptions Icon={MailIcon} text="Messages" />
      <SidebarOptions Icon={PersonOutlineIcon} text="Profile" />
      {/* Sidebar options  */}
      {/* Sidebar options  */}

      {/* Tweet button  */}
    </div>
  );
}
export default Sidebar;
