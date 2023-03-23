import React from "react";
import Image from "next/image";
import style from "./HeroPic.module.scss";
import jsLogo from "assets/icons/javascript-logo.svg";
import reactLogo from "assets/icons/react-logo.svg";
import dhImg from "assets/images/diego-img-lossy.webp";

const HeroPic = () => {
  return (
    <div className={style.mainRight}>
      <div className={style.imgCollageContainer}>
        <Image src={jsLogo} alt="" className={style.javascriptLogo} />
        <Image src={reactLogo} alt="" className={style.reactLogo} />
        <div className={style.heroImgContainer}>
          <Image
            src={dhImg}
            alt="Photo of Diego"
            className={style.diegoImage}
            priority={true}
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </div>
    </div>
  );
};

export { HeroPic };
