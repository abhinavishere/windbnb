import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <form className={classes.search}>
      <div>
        <input type="text" placeholder="Enter City or State" />
      </div>
      <div>
        <input type="number" min="1" max="5" placeholder="Add guests" />
      </div>
      <div className={classes.searchIcon}>
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
