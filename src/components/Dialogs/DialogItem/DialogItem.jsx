import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = (props) => {
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

export default DialogItem;
