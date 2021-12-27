import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, requiredField } from "../../../utils/validators/validator";
import { Input } from "../../common/FormsControls/FormsControl";
import Post from "../MyPosts/Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post
      name={p.name}
      avatar={p.avatar}
      message={p.message}
      likeCount={p.likeCount}
      postimg={p.postimg}
    />
  ));

  let onSubmit = (formData) => {
    props.addPostActionCreator(formData.post, props.login);
  };

  return (
    <div>
      <h3>My posts</h3>
      <MyPostsFormRedux onSubmit={onSubmit} props={props} />
      <div>
        <h4>New Posts</h4>
      </div>
      <div className={s.posts}>
        <div className={s.item}>{postElements}</div>
      </div>
    </div>
  );
};
let MaxLengthCreator = maxLength(20);
const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.myPosts}>
        <Field
          type={"text"}
          component={Input}
          name={"post"}
          validate={[requiredField, MaxLengthCreator]}
        />
        <div>
          <button>Add post</button>
        </div>
      </div>
    </form>
  );
};

const MyPostsFormRedux = reduxForm({ form: "myPost" })(MyPostForm);

export default MyPosts;
