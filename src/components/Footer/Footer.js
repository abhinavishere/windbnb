import React from "react";
import classes from "./Footer.module.css";

const Footer = ({ userName, userLink }) => {
  return (
    <footer className={classes.footer}>
      <p>
        created by{" "}
        <a href={userLink} className={classes.footerLink}>
          {userName}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
