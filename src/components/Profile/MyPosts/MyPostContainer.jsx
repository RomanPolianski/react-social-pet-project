import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (body) => {
          store.dispatch(updateNewPostTextActionCreator(body));
        };

        let postElements = state.profilePage.posts;

        return (
          <MyPosts
            addPostActionCreator={addPost}
            updateNewPostTextActionCreator={onPostChange}
            posts={postElements}
            value={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
