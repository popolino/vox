import React from "react";
import classes from "./SidebarFriends.module.scss";
import SidebarFriend from "./SidebarFriend/SidebarFriend";

const SidebarFriends = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.online}>
        {props.friends.length > 1
          ? `${props.friends.length} friends`
          : "1 friend"}
      </div>
      <div className={classes.list}>
        {props.friends.map((item) => (
          <SidebarFriend
            key={item.id}
            id={item.id}
            username={item.name}
            avatar={item.photos.small}
          />
        ))}
      </div>
    </div>
  );
};
export default SidebarFriends;
