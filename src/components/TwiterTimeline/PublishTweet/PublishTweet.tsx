import React from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import style from "./PublishTweet.module.scss";
import { FaImage } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { AiOutlineFileGif } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const PublishTweet = ({
  userTweets,
  setUserTweets,
}: {
  userTweets: TweetUser[];
  setUserTweets: (newItem: TweetUser[]) => void;
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = event.currentTarget.content.value;

    const user: TweetUser = {
      name: "Awesome Person",
      username: "the-best-person",
      tweet: "",
      date: new Date().toJSON().slice(0, 10),
    };
    user.tweet = content;

    if (user.tweet !== "") {
      event.currentTarget.content.value = "";
      const aux = [...userTweets];
      aux.unshift(user);
      setUserTweets(aux);
    }
  };

  return (
    <div className={style.publishTweet}>
      <div className={style.profPicContainer}>
        <img
          src="https://picsum.photos/id/366/100"
          alt="Profile pic"
          className={`${style.profilePic} img-default`}
        />
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <textarea
          cols={30}
          rows={10}
          placeholder="What's Happenning"
          name="content"
        ></textarea>
        <div className={style.bottomMenu}>
          <ul className={style.list}>
            <li>
              <button
                type="button"
                onClick={() => {
                  console.log("Agregando imagen...");
                }}
              >
                <FaImage />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => console.log("Agregando imagen...")}
              >
                <AiOutlineFileGif />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => console.log("Agregando imagen...")}
              >
                <HiOutlineEmojiHappy />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => console.log("Agregando ubicacion...")}
              >
                <MdGpsFixed />
              </button>
            </li>
          </ul>
          <button type="submit" className={style.tweetButton}>
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export { PublishTweet };
