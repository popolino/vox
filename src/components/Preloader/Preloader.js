import { SvgSelector } from "../SvgSelector/SvgSelector";
import * as React from "react";

const Preloader = (props) => {
  return (
    <div className={props.className}>
      <SvgSelector id="preloader" />{" "}
    </div>
  );
};

export default Preloader;
