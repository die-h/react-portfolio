import React from "react";
import style from "./PinterestHeader.module.scss";
import { FaPinterest, FaRegBell, FaChevronDown } from "react-icons/fa";
import { RxMagnifyingGlass, RxAvatar } from "react-icons/rx";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const PinterestHeader = () => {
  return (
    <header>
      <nav className={style.nav}>
        <div className={style.leftSide}>
          <div className={style.logoContainer}>
            <FaPinterest className={style.logo} />
          </div>
          <ul>
            <li>Inicio</li>
            <li className={`${style.desktopMenu}`}>Hoy</li>
            <li className={`${style.createBut} ${style.desktopMenu}`}>
              Crear <FaChevronDown />
            </li>
          </ul>
        </div>
        <div className={style.searchBar}>
          <RxMagnifyingGlass />
          <input type="text" name="searchValue" id="" placeholder="Search" />
        </div>
        <div className={style.rightSide}>
          <RxMagnifyingGlass className={style.searchMobile}/>
          <FaRegBell />
          <IoChatbubbleEllipsesSharp />
          <RxAvatar />
          <FaChevronDown />
        </div>
      </nav>
    </header>
  );
};
export { PinterestHeader };
