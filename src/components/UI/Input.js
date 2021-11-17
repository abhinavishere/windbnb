import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.inputWrapper}>
      {props.label && (
        <label htmlFor={props.id} className={classes.label}>
          {props.label}
        </label>
      )}
      <input
        className={classes.input}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Input;
