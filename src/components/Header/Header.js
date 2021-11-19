import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="/" className={classes.logo}>
        <img src="/logo.svg" alt="Windbnb Logo" />
      </a>
      <div className={classes.search}>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
