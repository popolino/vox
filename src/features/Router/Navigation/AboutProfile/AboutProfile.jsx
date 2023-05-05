import React from "react";
import classes from "./AboutProfile.module.scss";
import avatar from "../../../../img/avatar.jpg";
import { NavLink } from "react-router-dom";

const AboutProfile = (props) => {
  console.log(props);
  return (
    <div className={classes.profile}>
      <div className="user">
        <div className={`${classes.avatar} sidebar__profile_photo`}>
          <img src={avatar} alt="#" />
        </div>
        <div className="about-user">
          <NavLink to="/profile">
            <div className="username">
              {props.isAuth ? props.login : "UserName"}
            </div>
          </NavLink>
          <div className="unique-name">
            {props.isAuth ? props.email : `@user`}
          </div>
        </div>
      </div>
      <div className={classes.counters}>
        <NavLink to="/friends">
          <div className={classes.counter}>
            <div className={classes.number}>{props.friends.length}</div>
            <div className={classes.tittle}>Friends</div>
          </div>
        </NavLink>
        <div className={classes.counter}>
          <div className={classes.number}>568</div>
          <div className={classes.tittle}>Followers</div>
        </div>
        <div className={classes.counter}>
          <div className={classes.number}>{props.wallData.length}</div>
          <div className={classes.tittle}>Posts</div>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
