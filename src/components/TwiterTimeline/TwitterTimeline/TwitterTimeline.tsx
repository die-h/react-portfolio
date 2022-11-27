import React from "react";
import { Header } from "components/TwiterTimeline";
import { Tweet } from "components/TwiterTimeline";
import style from "./TwitterTimeline.module.scss"

const TwitterTimeline = () => {
  return (
    <section className={style.timeline}>
      <Header />
      <Tweet />
    </section>
  );
};

export { TwitterTimeline };
