import React from "react";
import classes from "../SidebarFriends.module.scss";
import { SvgSelector } from "../../../../components/SvgSelector/SvgSelector";
import Tooltip from "@mui/material/Tooltip";
import avatar from "../../../../img/avatar.jpg";

const SidebarFriend = (props) => {
  return (
    <div className={`${classes.user} user`}>
      <div className={`${classes.avatar} sidebar__profile_photo`}>
        <img src={props.avatar ? props.avatar : avatar} alt="" />
      </div>
      <div className="about-user">
        <div className="username">{props.username}</div>
        <div className="unique-name">{`@user${props.id}`}</div>
      </div>
      <Tooltip
        title="Add message"
        placement="left"
        classes={{ tooltip: "tooltip" }}
      >
        <button className={classes.comment}>
          <SvgSelector id="comment" />
        </button>
      </Tooltip>
    </div>
  );
};

export default SidebarFriend;
