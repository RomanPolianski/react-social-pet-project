import Friend from "./Friend/Friend";
import s from "./Sidebar.module.css";

let Sidebar = (props) => {
  let profilePic = props.state.friends.map((a) => (
    <Friend name={a.name} id={a.id} avatar={a.avatar} />
  ));

  return (
    <div className={s.friends}>
      <h3>Friends</h3>
      <div className={s.item}>{profilePic}</div>
    </div>
  );
};

export default Sidebar;
