import React from "react";
import style from "./Contact.module.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <footer className={style.footer}>
      <h3 className={style.contactTitle}>Contact</h3>
      <div className={style.socialMediaContainer}>
        <div className={style.socialMedia}>
          <BsGithub className={style.socialIcon}/>
          <a
            href="https://github.com/die-h"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className={style.socialMedia}>
          <BsLinkedin className={style.socialIcon}/>
          <a
            href="https://www.linkedin.com/in/diego-horacio-hermida/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Contact };
