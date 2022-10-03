import React from "react";
import classes from "./Container.module.scss";
import {
  Search,
  SvgSelector,
} from "../../../../components/SvgSelector/SvgSelector";

const Container = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.tittle}>Profile</div>
      <div className={classes.search}>
        <div className={classes.svg}>
          <SvgSelector id="search" className={classes["search-svg"]} />
        </div>
        <input
          className={classes["search-input"]}
          placeholder="Find friends, communities and more here"
          type="text"
        />
      </div>
    </div>
  );
};

export default Container;
