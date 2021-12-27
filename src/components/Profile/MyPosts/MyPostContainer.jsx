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
    login: state.auth.login
  };
};

const MyPostContainer = connect(mapStateToProps, {
  addPostActionCreator,
})(MyPosts);
export default MyPostContainer;
