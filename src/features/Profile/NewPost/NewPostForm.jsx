import { Field, reduxForm } from "redux-form";
import classes from "./NewPost.module.scss";
import avatar from "../../../img/avatar.jpg";
import { SvgSelector } from "../../../components/SvgSelector/SvgSelector";
import React from "react";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { FormsControls } from "../../../components/FormsControls/FormsControls";
const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.row}>
        <div className={`${classes.avatar} sidebar__profile_photo`}>
          <img src={avatar} alt="" />
        </div>
        <div>
          <Field
            name={"post"}
            component={FormsControls}
            onClick={props.showButton}
            validate={[required, maxLength10]}
            children={<textarea placeholder="What’s on your mind?" />}
          />
        </div>
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
      <div>{props.button && <button>post</button>}</div>
    </form>
  );
};

const PostReduxForm = reduxForm({
  form: "post",
})(NewPostForm);

export default PostReduxForm;
