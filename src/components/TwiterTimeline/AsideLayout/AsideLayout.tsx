import React from "react";
import style from "./AsideLayout.module.scss";

const AsideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className={style.container}>
      {children}
      <a className={style.link} href="#">Show More</a>
    </article>
  );
};

export { AsideLayout };
