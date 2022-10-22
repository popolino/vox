import React from "react";
import classes from "./Wall.module.scss";
import avatar from "../../../img/avatar.jpg";
import cat from "../../../img/image 6.png";
import { SvgSelector } from "../../../components/SvgSelector/SvgSelector";
import Post from "./Post/Post";
import SidebarFriend from "../../Router/SidebarFriends/SidebarFriend/SidebarFriend";

const Wall = ({ wallData }) => (
  <div className="post-container">
    {wallData.map((item) => (
      <Post
        key={item.id}
        username={item.username}
        avatar={item.avatar}
        online={item.online}
        postComment={item.postComment}
        postPic={item.postPic}
        likes={item.likes}
        comments={item.comments}
        reposts={item.reposts}
      />
    ))}
  </div>
);

export default Wall;
