import s from "./Post.module.css";

let Post = (props) => {
  let like;
  let like_img = <img src="https://s.pngkit.com/png/small/11-114367_facebook-like-icon-like-facebook.png"/>
  let likeCheck = () => {
    props.likeCount == "1" ? (like = "Like") : (like = "Likes");
  };
  likeCheck();
  return (
    <div className={s.item}>
      <img src={props.avatar} className={s.avatar}/>
      <span><span className={s.name}>{props.name}</span>: {props.message}</span>
      <div className={s.postimg}>
        <img src={props.postimg} />
      </div>
      <div>
        <span className={s.like_img}>
          {like_img}
        </span>
        <span className={s.like}>
        {props.likeCount} {like} 
        </span>
      </div>
    </div>
  );
};

export default Post;
