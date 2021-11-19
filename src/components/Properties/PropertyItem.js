import React from "react";
import StarIcon from "@mui/icons-material/Star";
import classes from "./PropertyItem.module.css";

const PropertyItem = ({ src, title, superhost, type, rating, beds }) => {
  return (
    <li className={classes.propItem}>
      <div className={classes.propImg}>
        <img src={src} alt={title} />
      </div>
      <div className={classes.propSpecs}>
        {superhost && <span className={classes.propSuperHost}>SUPERHOST</span>}
        <span className={classes.propInfo}>
          <span className={classes.propType}>
            {type}. {beds ? `${beds} beds` : ""}
          </span>
          <span className={classes.propRating}>
            <StarIcon />
            <span>{rating}</span>
          </span>
        </span>
      </div>
      <p className={classes.propTitle}>{title}</p>
    </li>
  );
};

export default PropertyItem;
