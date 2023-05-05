import React from "react";
import Post from "./Post/Post";

const Wall = (props) => {
  return (
    <div className="post-container">
      {props.wallData.map((item) => (
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
          profile={props.profile}
          login={props.login}
        />
      ))}
    </div>
  );
};

export default Wall;
