import React from "react";
import { RiHome7Fill } from "react-icons/ri";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaRegBell, FaTwitter } from "react-icons/fa";
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
        </li>
        <li>
          <RxMagnifyingGlass />
        </li>
        <li>
          <FaRegBell />
        </li>
        <li>
          <HiOutlineMail />
        </li>
        <li>
          <RxAvatar />
        </li>
        <li>
          <HiOutlineEllipsisHorizontalCircle />
        </li>
      </ul>
          <NewTweetBut />
    </nav>
  );
};

export { DesktopNavbar };
