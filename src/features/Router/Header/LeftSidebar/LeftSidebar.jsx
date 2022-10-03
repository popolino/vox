import React from "react";
import classes from "./LeftSidebar.module.scss";

const LeftSidebar = (props) => {
  return (
    <div className={classes["left-sidebar"]}>
      <div className={classes.logo}></div>
      <div className={classes.vox}>VOX</div>
    </div>
  );
};

export default LeftSidebar;
