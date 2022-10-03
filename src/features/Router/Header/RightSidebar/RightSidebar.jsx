import React from "react";
import classes from "./RightSidebar.module.scss";
import avatar from "../../../../img/avatar.jpg";
import {
  Bell,
  Comment,
  SvgSelector,
} from "../../../../components/SvgSelector/SvgSelector";

const RightSidebar = (props) => {
  return (
    <div className={classes["right-sidebar"]}>
      <div className={classes.notifications}>
        <div className={classes.svg}>
          <SvgSelector id="comment" className={classes["header-svg"]} />
        </div>
        <div className={classes.svg}>
          <SvgSelector id="bell" className={classes["header-svg"]} />
        </div>
      </div>
      <div className={classes.user}>
        <div className="sidebar__profile_photo">
          <img src={avatar} alt="" />
        </div>
        <div className={classes.arrow}>❱</div>
      </div>
    </div>
  );
};

export default RightSidebar;
