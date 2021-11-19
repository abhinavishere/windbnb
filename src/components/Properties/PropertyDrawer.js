import React, { useContext } from "react";
import classes from "./PropertyDrawer.module.css";
import StayContext from "../../store/stay-context";
import PropertyItem from "./PropertyItem";

const PropertyDrawer = () => {
  const stayCtx = useContext(StayContext);
  const filteredStaysByLocation = stayCtx.filter(
    (item) => item.city === "Helsinki"
  );
  // console.log(filteredStaysByLocation);
  const location = filteredStaysByLocation[0].country;
  const numberOfStays = filteredStaysByLocation.length;
  return (
    <main className={classes.drawer}>
      <div className={classes.drawerHeader}>
        <h2>Stays in {location}</h2>
        <span>{numberOfStays}+ Stays</span>
      </div>
      <ul className={classes.drawerGrid}>
        {filteredStaysByLocation.map((item, index) => (
          <PropertyItem
            src={item.photo}
            alt={item.title}
            title={item.title}
            superhost={item.superHost}
            type={item.type}
            rating={item.rating}
            beds={item.beds}
            key={index}
          />
        ))}
      </ul>
    </main>
  );
};

export default PropertyDrawer;
