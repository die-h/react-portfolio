import React from "react";
import style from "./PinterestCard.module.scss";

const PinterestCard = () => {
  return (
    <article className={style.cardContainer}>
      <img src="http://picsum.photos/300" alt="" />
    </article>
  );
};

export { PinterestCard };
