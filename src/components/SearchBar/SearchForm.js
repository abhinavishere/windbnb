import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = () => {
  return (
    <form>
      <div>
        <Input
          label="Location"
          id="location"
          type="text"
          placeholder="Enter your location"
        />
        <Input
          label="Guests"
          id="guests"
          type="text"
          placeholder="Add Guests"
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
