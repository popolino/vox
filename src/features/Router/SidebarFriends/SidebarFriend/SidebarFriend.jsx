import React from "react";
import classes from "../SidebarFriends.module.scss";
import { SvgSelector } from "../../../../components/SvgSelector/SvgSelector";
import { ShowMessage } from "../../../../actions";
import MyTooltip from "../../../../components/MyTooltip/MyTooltip";
import Tooltip from "@mui/material/Tooltip";

const SidebarFriend = (props) => {
  return (
    <div className={`${classes.user} user`}>
      <div className={`${classes.avatar} sidebar__profile_photo`}>
        <img src={props.avatar} alt="" />
      </div>
      <div className="about-user">
        <div className="username">{props.username}</div>
        <div className="unique-name">{props.unique_name}</div>
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
