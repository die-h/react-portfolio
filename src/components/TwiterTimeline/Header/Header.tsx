import React from "react";
import style from "./Header.module.scss";
import { IoSparklesOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <section className={style.header}>
        <button className={style.menuMobileButton}><RxAvatar /></button>
        <p className={style.headerTitle}>Home</p>
        <IoSparklesOutline className={style.sparkle} />
      </section>
    </>
  );
};

export { Header };
