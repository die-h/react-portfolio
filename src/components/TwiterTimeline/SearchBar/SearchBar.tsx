import React from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <RxMagnifyingGlass />
        <input type="text" placeholder="Search Twitter" />
      </div>
    </div>
  );
};

export { SearchBar };
