import React from "react";
import classes from "./NewPost.module.scss";
import avatar from "../../../img/avatar.jpg";
import { SvgSelector } from "../../../components/SvgSelector/SvgSelector";

const NewPost = (props) => (
  <div className="post-container">
    <div className={classes.row}>
      <div className={`${classes.avatar} sidebar__profile_photo`}>
        <img src={avatar} alt="" />
      </div>
      <textarea placeholder="What’s on your mind?" />
    </div>
    <div className={classes.content}>
      <div className={classes["content-button"]}>
        <SvgSelector id="image" />
        <div className={classes.title}>
          <p>Image</p>
        </div>
      </div>
      <div className={classes["content-button"]}>
        <SvgSelector id="music" />
        <div className={classes.title}>
          <p>Audio</p>
        </div>
      </div>
      <div className={classes["content-button"]}>
        <SvgSelector id="videos" />
        <div className={classes.title}>
          <p>Video</p>
        </div>
      </div>
    </div>
  </div>
);

export default NewPost;
