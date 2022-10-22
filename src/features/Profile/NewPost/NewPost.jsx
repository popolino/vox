import React from "react";
import classes from "./NewPost.module.scss";
import avatar from "../../../img/avatar.jpg";
import { SvgSelector } from "../../../components/SvgSelector/SvgSelector";
import { addPost, setPostText, showButton } from "../../../actions";
import { connect } from "react-redux";

const NewPost = ({ postText, onChangePostText, onAddPost, onShowButton }) => {
  return (
    <div className="post-container">
      <div className={classes.row}>
        <div className={`${classes.avatar} sidebar__profile_photo`}>
          <img src={avatar} alt="" />
        </div>
        <textarea
          value={postText}
          placeholder="What’s on your mind?"
          onClick={onShowButton}
          onChange={(event) => onChangePostText(event.target.value)}
        />
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
      <div>
        {showButton.some((show) => show.isActive) && (
          <button
            onClick={() =>
              onAddPost({
                username: "Polina As Fuck",
                avatar: avatar,
                online: "25 minutes ago",
                postComment: postText,
                postPic: null,
                likes: 2,
                comments: 0,
                reposts: 3,
              })
            }
          >
            post
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wallData: state.profileReducer.wallData,
    postText: state.profileReducer.postText,
    showButton: state.profileReducer.showButton,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (post) => dispatch(addPost(post)),
    onChangePostText: (postText) => dispatch(setPostText(postText)),
    onShowButton: () => dispatch(showButton()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
