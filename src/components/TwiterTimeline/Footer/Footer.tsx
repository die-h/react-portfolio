import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.container}>
      <a href="#">Terms of Service</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Cookie Policy</a>
      <a href="#">Accessibility</a>
      <a href="#">Ads info</a>
      <a href="#">More</a>
      <p>© 2022 Twitter, Inc.</p>
    </div>
  );
};
export { Footer };
