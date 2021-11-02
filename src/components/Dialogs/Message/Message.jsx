import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={s.message}>
      {/* <div className={s.item}><img src={props.avatar}/></div> */}
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

export default Message;
