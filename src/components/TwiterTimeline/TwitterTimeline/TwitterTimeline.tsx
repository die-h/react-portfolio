import React, { useEffect, useState } from "react";
import style from "./TwitterTimeline.module.scss";
import { getRandomQuote } from "utils/getRandomQuote";
import { getRandomBetweenTwoNumbers } from "utils/getRandomBetweenTwoNumbers";
import {
  MobileNav,
  NewTweetBut,
  Tweet,
  Header,
  AddTweet,
} from "components/TwiterTimeline";

const TwitterTimeline = () => {
  const [users, setUsers] = useState<TweetRandom[]>([]);

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
        <Header />
        <AddTweet />
        <ul>
          {users.map((user) => {
            return (
              <Tweet
                key={user._id}
                name={user.author}
                username={user.authorSlug}
                content={user.content}
                date={user.dateAdded}
                picture={"https://picsum.photos/50"}
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
