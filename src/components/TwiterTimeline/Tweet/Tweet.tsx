import React from "react";
import style from "./Tweet.module.scss";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const Tweet = () => {
  return (
    <article className={style.tweetBody}>
      <div className={style.leftSide}>
        <div className={style.profPic}></div>
      </div>
      <div className={style.rightSide}>
        <div className={style.tweetHeader}>
          <div className={style.nameContainer}>
            <p className={style.name}>name</p>
            <p className={style.username}>{`@${"username"} · ${"time"}`}</p>
          </div>
          <div className={style.threeDots}>•••</div>
        </div>
        <p className={style.tweetContent}> tweetContent</p>
        <div >
          <ul className={style.tweetFooter}>
            <li>{<FaRegComment />}</li>
            <li>{<FaRetweet />}</li>
            <li>{<FaRegHeart />}</li>
            <li>{<MdOutlineFileUpload />}</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export { Tweet };
