import React from "react";
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

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.myPosts}>
        <input
          type="text"
          placeholder="Whats new?"
          ref={newPostElement}
        ></input>
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
