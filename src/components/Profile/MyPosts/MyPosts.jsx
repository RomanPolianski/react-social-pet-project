import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import Post from "../MyPosts/Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  debugger;
  let postElements = props.profilePage.posts.map((p) => (
    <Post
      name={p.name}
      avatar={p.avatar}
      message={p.message}
      likeCount={p.likeCount}
      postimg={p.postimg}
    />
  ));

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.myPosts}>
        <input
          type="text"
          onChange={onPostChange}
          value={props.profilePage.newPostText}
        />
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        <h4>New Posts</h4>
      </div>
      <div className={s.posts}>
        <div className={s.item}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
