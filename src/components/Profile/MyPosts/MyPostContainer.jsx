import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (body) => {
//           store.dispatch(updateNewPostTextActionCreator(body));
//         };

//         let postElements = state.profilePage.posts;

//         return (
//           <MyPosts
//             addPostActionCreator={addPost}
//             updateNewPostTextActionCreator={onPostChange}
//             posts={postElements}
//             value={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    value: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPostActionCreator: () => dispatch(addPostActionCreator()),
    updateNewPostTextActionCreator: () => dispatch(updateNewPostTextActionCreator())
  };
};

const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
export default MyPostContainer;
