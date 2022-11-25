import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <section className={style.header}>
        <button>pic</button>
        <p className={style.headerTitle}>Home</p>
        <button>sparkle</button>
      </section>
    </>
  );
};

export { Header };
