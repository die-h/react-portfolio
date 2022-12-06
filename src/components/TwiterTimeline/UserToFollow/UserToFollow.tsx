import React from "react";
import style from "./UserToFollow.module.scss";
import { getRandomBetweenTwoNumbers } from "utils/getRandomBetweenTwoNumbers";
const UserToFollow = ({ name, username }: TweetFollower) => {
  return (
    <div className={style.container}>
      <div className={style.user}>
        <img
          src={`http://picsum.photos/id/${getRandomBetweenTwoNumbers(
            1,
            500
          )}/100`}
          className={style.image}
        />
        <div className={style.userContainer}>
          <p>{`${name}`}</p>
          <p>{`@${username}`}</p>
        </div>
      </div>
      <button type="button" className={style.followButton}>
        Follow
      </button>
    </div>
  );
};
export { UserToFollow };
