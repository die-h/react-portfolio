import React, { useEffect, useState } from "react";
import style from "./TwitterTimeline.module.scss";
import { getRandomQuote } from "utils/getRandomQuote";
import { getRandomBetweenTwoNumbers } from "utils/getRandomBetweenTwoNumbers";
import {
  MobileNav,
  NewTweetBut,
  Tweet,
  TwitterHeader,
  PublishTweet,
} from "components/TwiterTimeline";
import { useLocalStorage } from "hooks/useLocalStorage";

const TwitterTimeline = () => {
  const [users, setUsers] = useState<TweetRandom[]>([]);
  const [userTweets, setUserTweets] = useLocalStorage<TweetUser[]>("myTweets", []);

  useEffect(() => {
    if (users.length === 0) {
      (async () => {
        const userAux = [...users];
        for (let i = 0; i < getRandomBetweenTwoNumbers(5, 7); i++) {
          const randomTweet: TweetRandom = await getRandomQuote().then(
            (data) => data
          );
          userAux.push(randomTweet);
        }
        setUsers(userAux);
      })();
    }
  }, []);

  return (
    <section className={style.timeline}>
      <>
        <TwitterHeader />
        <PublishTweet userTweets={userTweets} setUserTweets={setUserTweets} />
        <ul>
          {userTweets.map((user, index) => {
            return (
              <Tweet
                key={index}
                name={user.name}
                username={user.username}
                content={user.tweet}
                date={user.date}
                picture={"https://picsum.photos/id/366/100"}
              />
            );
          })}
          {users.map((user) => {
            return (
              <Tweet
                key={user._id}
                name={user.author}
                username={user.authorSlug}
                content={user.content}
                date={user.dateAdded}
              />
            );
          })}
        </ul>
        <MobileNav />
        <div className={style.newTweetBut}>
          <NewTweetBut />
        </div>
      </>
    </section>
  );
};

export { TwitterTimeline };
