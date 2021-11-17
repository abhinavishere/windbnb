import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchForm from "./SearchForm";

const SearchModal = () => {
  return (
    <div>
      <div>
        <span>Edit your search</span>
        <span>
          <CloseIcon />
        </span>
      </div>
      <SearchForm />
    </div>
  );
};

export default SearchModal;
