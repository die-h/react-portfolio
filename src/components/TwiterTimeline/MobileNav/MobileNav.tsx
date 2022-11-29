import React from "react";
import { RiHome7Fill } from "react-icons/ri";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import style from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.ulNav}>
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
      </ul>
    </nav>
  );
};

export { MobileNav };
