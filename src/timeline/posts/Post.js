import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizonIcon from "@mui/icons-material/MoreHoriz";

function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="post">
      <div className="post_header">
        <div className="post_headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          &nbsp; {user} <span>.{timestamp}</span>
        </div>
        <MoreHorizonIcon />
      </div>
      <div className="post_image">
        <img src={postImage} alt="" />
      </div>
      <div className="post_footer">
        <div className="post_footerIcons">
          <div className="post_iconsMain">
            <FavoriteBorderIcon className="post_icon" />
            <ChatBubbleOutlineIcon className="post_icon" />
            <TelegramIcon className="post_icon" />
          </div>
          <div className="post_iconSave">
            <BookmarkBorderIcon className="post_icon" />
          </div>
        </div>
        Liked by {likes} People
      </div>
    </div>
  );
}

export default Post;
