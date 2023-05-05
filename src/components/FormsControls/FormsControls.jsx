import React from "react";
import classes from "./FormsControls.module.scss";
import { clsx } from "clsx";

export const FormsControls = ({ input, meta, ...props }) => {
  const error = meta.touched && meta.error;
  return (
    <div className={clsx(classes["form-control"], { [classes.error]: error })}>
      <div {...input} {...props}>
        {props.children}
      </div>

      {error && <span>{meta.error}</span>}
    </div>
  );
};
