import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const availableLocations = [
  {
    city: "Helsinki",
    country: "Finland",
  },
  {
    city: "Turku",
    country: "Finland",
  },
  {
    city: "Oulu",
    country: "Finland",
  },
  {
    city: "Vaasa",
    country: "Finland",
  },
];

const SearchItem = ({ location }) => {
  return (
    <li>
      <span>
        <LocationOnIcon />
      </span>
      <span>
        {location.city}, {location.country}
      </span>
    </li>
  );
};

const SearchList = () => {
  return (
    <ul>
      {availableLocations.map((item, index) => {
        return <SearchItem location={item} key={index} />;
      })}
    </ul>
  );
};

export default SearchList;
