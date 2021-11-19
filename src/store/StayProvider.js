import React from "react";
import StayContext from "./stay-context";
import stays from "../stays.json";

const StayProvider = (props) => {
  return (
    <StayContext.Provider value={stays}>{props.children}</StayContext.Provider>
  );
};

export default StayProvider;
