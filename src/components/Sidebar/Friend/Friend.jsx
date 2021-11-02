import { NavLink } from "react-router-dom";
import s from "./Friend.module.css";

let Friend = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialog}>
      <div className={s.item}>
        <img src={props.avatar} />
      </div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Friend;
