import React from "react";
import {
  SearchBar,
  WhatsHappenning,
  WhoToFollow,
  Footer,
} from "components/TwiterTimeline";
import style from "./AsideSection.module.scss";

const AsideSection = () => {
  return (
    <section className={style.asideSection}>
      <SearchBar />
      <WhatsHappenning />
      <WhoToFollow />
      <Footer />
    </section>
  );
};
export { AsideSection };
