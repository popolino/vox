import React from "react";
import classes from "./Profile.module.scss";
import header from "../../img/image 4.png";
import avatar from "../../img/avatar.jpg";
import { NavLink } from "react-router-dom";
import { SvgSelector } from "../../components/SvgSelector/SvgSelector";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import NewPost from "./NewPost/NewPost";
import Wall from "./Wall/Wall";
import { connect } from "react-redux";
import { addPost, setPostText } from "../../actions";

const Profile = ({ wallData, createPost, postText, changePostText }) => (
  <div className={classes.container}>
    <ProfileHeader />
    <NewPost
      createPost={createPost}
      postText={postText}
      changePostText={changePostText}
    />
    <Wall wallData={wallData} />
  </div>
);
const mapStateToProps = (state) => ({
  wallData: state.profileReducer.wallData,
  postText: state.profileReducer.postText,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(addPost(post)),
    changePostText: (postText) => dispatch(setPostText(postText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
