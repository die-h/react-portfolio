import React from "react";
import { HeroPic } from "components/Home";
import style from "./PersonalInfo.module.scss"
const PersonalInfo = () => {
  return (
    <aside className={style.personalInfo}>
      <HeroPic />
    </aside>
  );
};

export { PersonalInfo };
