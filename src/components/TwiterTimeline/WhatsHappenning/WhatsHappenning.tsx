import React from "react";
import { AsideLayout } from "components/TwiterTimeline";
import style from "./WhatsHappenning.module.scss"

const WhatsHappenning = () => {
  return (
    <AsideLayout>
      <div className={style.container}> 
      <h4>What&apos;s Happenning</h4>
      <div className={style.trending}>
        <span>Trending in somewhere</span>
        <span>Politic topic</span>
        <span>232K Tweets</span>
        <div className={style.threeDots}>•••</div>
      </div>
      <div className={style.trending}>
        <span>Trending in somewhere</span>
        <span>Sport topic</span>
        <span>35.7K Tweets</span>
        <div className={style.threeDots}>•••</div>
      </div>
      <div className={style.trending}>
        <span>Trending in somewhere</span>
        <span>Random topic</span>
        <span>12.5K Tweets</span>
        <div className={style.threeDots}>•••</div>
      </div>
      </div>
    </AsideLayout>
  );
};

export { WhatsHappenning };
