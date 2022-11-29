import React from "react";
import style from "./UserToFollow.module.scss";

const UserToFollow = () => {
  return (
    <div className={style.container}>
      <div className={style.user}>
        <div className={style.image}></div>
        <div className={style.userContainer}>
          <p>Name</p>
          <p>@username</p>
        </div>
      </div>
      <button type="button" className={style.followButton}>Follow</button>
    </div>
  );
};
export { UserToFollow };
