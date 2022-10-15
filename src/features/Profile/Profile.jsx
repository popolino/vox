import React from "react";
import classes from "./Profile.module.scss";
import header from "../../img/image 4.png";
import avatar from "../../img/avatar.jpg";
import { NavLink } from "react-router-dom";
import { SvgSelector } from "../../components/SvgSelector/SvgSelector";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import NewPost from "./NewPost/NewPost";
import Wall from "./Wall/Wall";
import store from "../../state";

const Profile = (props) => (
  <div className={classes.container}>
    <ProfileHeader />
    <NewPost />
    <Wall wallData={props.wallData} />
  </div>
);

export default Profile;
