import React from "react";
import style from "./Header.module.scss";
import { IoSparklesOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <section className={style.header}>
        <img
          src="https://picsum.photos/id/366/100"
          alt="user image"
          className={style.userPic}
        />
        <p className={style.headerTitle}>Home</p>
        <IoSparklesOutline className={style.sparkle} />
      </section>
    </>
  );
};

export { Header };
