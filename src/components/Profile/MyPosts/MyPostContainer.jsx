import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  console.log(state);
  let postElements = state.profilePage.posts;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (body) => {
    props.store.dispatch(updateNewPostTextActionCreator(body));
  };

  return (
    <MyPosts
      addPostActionCreator={addPost}
      updateNewPostTextActionCreator={onPostChange}
      posts={postElements}
      value={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
