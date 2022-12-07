import React from "react";
import style from "./TwitterHeader.module.scss";
import { IoSparklesOutline } from "react-icons/io5";

const TwitterHeader = () => {
  return (
    <>
      <header className={style.header}>
        <img
          src="https://picsum.photos/id/366/100"
          alt="user image"
          className={style.userPic}
        />
        <p className={style.headerTitle}>Home</p>
        <IoSparklesOutline className={style.sparkle} />
      </header>
    </>
  );
};

export { TwitterHeader };
