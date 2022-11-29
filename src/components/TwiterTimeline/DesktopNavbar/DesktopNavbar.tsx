import React from "react";
import { RiHome7Fill, RiFileList2Line } from "react-icons/ri";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaRegBell, FaTwitter, FaRegBookmark } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineEllipsisHorizontalCircle } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import { NewTweetBut } from "../NewTweetBut/NewTweetBut";
import style from "./DesktopNavbar.module.scss";

const DesktopNavbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.navUl}>
        <li>
          <FaTwitter />
        </li>
        <li>
          <RiHome7Fill />
          <span>Home</span>
        </li>
        <li>
          <RxMagnifyingGlass />
          <span>Explore</span>
        </li>
        <li>
          <FaRegBell />
          <span>Notifications</span>
        </li>
        <li>
          <HiOutlineMail />
          <span>Messages</span>
        </li>
        <li className={style.longNav}>
          <FaRegBookmark />
          <span>Bookmarks</span>
        </li>
        <li className={style.longNav}>
          <RiFileList2Line />
          <span>Lists</span>
        </li>
        <li>
          <RxAvatar />
          <span>Profile</span>
        </li>
        <li>
          <HiOutlineEllipsisHorizontalCircle />
          <span>More</span>
        </li>
      </ul>
      <NewTweetBut />
    </nav>
  );
};

export { DesktopNavbar };
