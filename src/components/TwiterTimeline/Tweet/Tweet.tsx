import React from "react";
import style from "./Tweet.module.scss";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { getRandomBetweenTwoNumbers } from "utils/getRandomBetweenTwoNumbers";

const Tweet = ({ name, username, content, date, picture }: TweetInfo) => {
  return (
    <article className={style.tweetBody}>
      <div className={style.leftSide}>
        <img
          src={
            picture
              ? picture
              : `http://picsum.photos/id/${getRandomBetweenTwoNumbers(
                  1,
                  500
                )}/100`
          }
          alt=""
          className={style.profPic}
        />
      </div>
      <div className={style.rightSide}>
        <div className={style.tweetHeader}>
          <div className={style.nameContainer}>
            <p className={style.name}>{`${name}`}</p>
            <p className={style.username}>{`@${username} · ${date}`}</p>
          </div>
          <div className={style.threeDots}>•••</div>
        </div>
        <p className={style.tweetContent}> {content}</p>
        {Math.random() > 0.5 ? (
          <div className={style.imgContainer}>
            {picture ? null : (
              <img
                className={style.tweetImg}
                src={`http://picsum.photos/id/${getRandomBetweenTwoNumbers(
                  1,
                  500
                )}/500`}
                alt=""
              />
            )}
          </div>
        ) : null}
        <div>
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
