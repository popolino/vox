import React from "react";
import classes from "./SidebarFriends.module.scss";
import avatar from "../../../img/avatar.jpg";
import { NavLink } from "react-router-dom";
import { SvgSelector } from "../../../components/SvgSelector/SvgSelector";
import SidebarFriend from "./SidebarFriend/SidebarFriend";

const SidebarFriends = (props) => (
  <div className={classes.container}>
    <div className={classes.online}>Friends ( 354 Online )</div>
    <div className={classes.list}>
      {props.friendsData.map((item) => (
        <SidebarFriend
          key={item.id}
          username={item.username}
          unique_name={item.unique_name}
          avatar={item.avatar}
        />
      ))}
    </div>
  </div>
);
export default SidebarFriends;
