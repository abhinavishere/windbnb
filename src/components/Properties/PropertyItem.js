import React from "react";
import StarIcon from "@mui/icons-material/Star";
import classes from "./PropertyItem.module.css";
import Fade from "react-reveal/Fade";

const PropertyItem = ({ src, title, superhost, type, rating, beds }) => {
  return (
    <Fade bottom>
      <li className={classes.propItem}>
        <div className={classes.propImg}>
          <img src={src} alt={title} loading="lazy" />
        </div>
        <div className={classes.propSpecs}>
          {superhost && (
            <span className={classes.propSuperHost}>SUPERHOST</span>
          )}
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
    </Fade>
  );
};

export default PropertyItem;
