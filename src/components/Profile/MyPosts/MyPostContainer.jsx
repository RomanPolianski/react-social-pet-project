import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    value: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPostActionCreator: () => dispatch(addPostActionCreator()),
    updateNewPostTextActionCreator: (text) => dispatch(updateNewPostTextActionCreator(text))
  };
};

const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
export default MyPostContainer;
