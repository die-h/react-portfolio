import React from "react";
import Image from "next/image";
import style from "./HeroInfo.module.scss";
import dhLogo from "assets/images/dh-logo.png";

const HeroInfo = () => {
  return (
    <div className={style.mainLeft}>
      <Image src={dhLogo} alt="dh logo" className={style.hmDhLogo} />
      <div className={style.nameContainer}>
        <h1 className={style.mainName}>
          <span className={style.nameD}>D</span>iego{" "}
          <span className={style.nameH}>H</span>.{" "}
          <span className={style.nameH}>H</span>
          ermida
        </h1>
        <h2 className={style.mainProfile}>{`</ Web Developer>`}</h2>
      </div>
      <p
        className={style.aboutMe}
      >{`HTML5 - CSS3 - JS
      Typescript
      React.js / Webpack - Vite.
      Sass - Tailwind for styling
      Next.js as framework.
      AZ-900 Microsoft Azure certified.
      Crypto-enthusiast`}</p>
    </div>
  );
};

export { HeroInfo };
