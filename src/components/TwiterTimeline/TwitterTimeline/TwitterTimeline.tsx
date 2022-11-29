import React from "react";
import { Header } from "components/TwiterTimeline";
import { Tweet } from "components/TwiterTimeline";
import style from "./TwitterTimeline.module.scss";
import { MobileNav } from "components/TwiterTimeline"

const users = [2, 3, 4];
const TwitterTimeline = () => {
  return (
    <section className={style.timeline}>
      <>
        <Header />
        <ul>
          {users.map((item) => {
            return <Tweet key={item} />;
          })}
        </ul>
        <MobileNav/>
      </>
    </section>
  );
};

export { TwitterTimeline };
