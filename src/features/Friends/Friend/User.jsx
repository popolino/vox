import React from "react";
import classes from "./User.module.scss";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";

const User = (props) => {
  return (
    <div className={classes.friend}>
      <div className={clsx("avatar", classes.avatar)}>
        <NavLink to={`/profile/${props.id}`}>
          <img src={props.photos} alt="" />
        </NavLink>
      </div>
      <p>{props.name}</p>
      {!props.followed ? (
        <button
          disabled={props.followingInProgress.some((id) => id === props.id)}
          className="button-blue"
          onClick={() => {
            props.follow(props.id);
          }}
        >
          Follow
        </button>
      ) : (
        <button
          className="button-gray"
          disabled={props.followingInProgress.some((id) => id === props.id)}
          onClick={() => {
            props.unfollow(props.id);
          }}
        >
          Unfollow
        </button>
      )}
    </div>
  );
};

export default User;
