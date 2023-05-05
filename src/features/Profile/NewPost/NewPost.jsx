import React, { useRef } from "react";
import useClickAway from "../../../components/useClickAway/useClickAway";
import PostReduxForm from "./NewPostForm";

const NewPost = (props) => {
  const ref = useRef(null);
  useClickAway(ref, props.hideButton);
  const onAddPost = (values) => {
    props.addPost({
      online: "Just now",
      postComment: values.post,
    });
  };
  return (
    <>
      <div className="post-container" id="text" ref={ref}>
        <PostReduxForm onSubmit={onAddPost} {...props} />
      </div>
    </>
  );
};
export default NewPost;
