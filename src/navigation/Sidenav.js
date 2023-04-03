import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { NotificationAdd } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { loginUser, logOutUser } from "../features/userSlice";
import { signOut } from "firebase/auth";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(loginUser());
    signOut(auth);
  };
  return (
    <div className="sidenav">
      <img
        className="sidenav_logo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
        alt=""
      />
      <div className="sidenav_buttons">
        <button className="sidenav_button">
          <HomeIcon />
          <span>Home</span>
        </button>

        <button className="sidenav_button">
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className="sidenav_button">
          <ExploreIcon />
          <span>Explore</span>
        </button>

        <button className="sidenav_button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>

        <button className="sidenav_button">
          <ChatIcon />
          <span>Messages</span>
        </button>

        <button className="sidenav_button">
          <NotificationAdd />
          <span>Notifications</span>
        </button>

        <button className="sidenav_button">
          <AddCircleIcon />
          <span>Create</span>
        </button>

        <button className="sidenav_button">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}
            <button onClick={handleLogout} className="logout_button">
              Logout
            </button>
          </span>
        </button>

        <div className="sidenav_more">
          <button className="sidenav_button">
            <MenuIcon />
            <span>Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
