import React from "react";
import { IoAddOutline } from "react-icons/io5";
import style from "./NewTweetBut.module.scss"

const NewTweetBut = () => {
  return (
    <button type="button" className={style.newTweet}>
      <IoAddOutline />
    </button>
  );
};

export { NewTweetBut };
