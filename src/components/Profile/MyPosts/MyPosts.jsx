import Post from "../MyPosts/Post/Post";
import s from "./MyPosts.module.css";

let MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post name={p.name} avatar={p.avatar} message={p.message} likeCount={p.likeCount} postimg={p.postimg}/>
  ));

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.myPosts}>
        <input type="text" placeholder="Whats new?"></input>
        <div>
          <button>Add post</button>
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
