import React from "react";
import style from "./Contact.module.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socialMediaContainer}>
        <div className={style.socialMedia}>
          <BsGithub />
          <a
            href="https://github.com/die-h"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className={style.socialMedia}>
          <BsLinkedin />
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
