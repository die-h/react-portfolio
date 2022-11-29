import React from "react";
import {
  SearchBar,
  WhatsHappenning,
  WhoToFollow,
} from "components/TwiterTimeline";
import style from "./AsideSection.module.scss";

const AsideSection = () => {
  return (
    <section className={style.asideSection}>
      <SearchBar />
      <WhatsHappenning />
      <WhoToFollow />
    </section>
  );
};
export { AsideSection };
