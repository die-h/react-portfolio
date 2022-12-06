import React, { useState, useEffect } from "react";
import { AsideLayout, UserToFollow } from "components/TwiterTimeline";
import { getRandomQuote } from "utils/getRandomQuote";
import style from "./WhoToFollow.module.scss";

const WhoToFollow = () => {
  const [toFollow, setToFollow] = useState<TweetRandom[]>([]);

  useEffect(() => {
    if (toFollow.length === 0) {
      (async () => {
        const userAux = [...toFollow];
        for (let i = 0; i < 3; i++) {
          const randomTweet: TweetRandom = await getRandomQuote().then(
            (data) => data
          );
          userAux.push(randomTweet);
        }
        setToFollow(userAux);
      })();
    }
  }, []);

  return (
    <AsideLayout>
      <div className={style.container}>
        <>
          <h4>Who to follow</h4>
          {toFollow.map((user) => {
            return (
              <UserToFollow key={user._id} name={user.author} username={user.authorSlug} />
            );
          })}
        </>
      </div>
    </AsideLayout>
  );
};
export { WhoToFollow };
