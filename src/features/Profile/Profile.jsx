import React from "react";
import classes from "./Profile.module.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import NewPost from "./NewPost/NewPost";
import Wall from "./Wall/Wall";

const Profile = (props) => {
  return (
    <div className={classes.container}>
      <ProfileHeader {...props} />
      <NewPost {...props} />
      <Wall {...props} />
    </div>
  );
};

export default Profile;
