import React from "react";
import s from "./Tweet.module.scss";

const Tweet = () => {
  return (
    <article className={s.tweetBody}>
      <div className={s.leftSide}>
        <div className={s.profPic}></div>
      </div>
      <div className={s.rightSide}>
        <div className={s.tweetHeader}>
          <div className={s.nameContainer}>
            <p className={s.name}>name</p>
            <p className={s.username}>{`@${"username"} · ${"time"}`}</p>
          </div>
          <div className={s.threeDots}>•••</div>
        </div>
        <p className={s.mainText}> MainText</p>
        {}
        <footer>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </footer>
      </div>
    </article>
  );
};

export { Tweet };
