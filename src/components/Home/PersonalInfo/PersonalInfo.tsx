import React from "react";
import { HeroPic, HeroInfo } from "components/Home";
import style from "./PersonalInfo.module.scss";
const PersonalInfo = () => {
  return (
    <aside className={style.personalInfo}>
      <HeroInfo />
      <HeroPic />
    </aside>
  );
};

export { PersonalInfo };
