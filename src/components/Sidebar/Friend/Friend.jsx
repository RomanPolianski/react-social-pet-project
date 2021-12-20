import { NavLink } from "react-router-dom";
import s from "./Friend.module.css";
import React from "react";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

class FriendContainer extends React.Component {
  

  render(){
    return <Friend {...this.props} />
  }

}

let withAuthFriends = withAuthRedirect(FriendContainer)

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

export default withAuthFriends; 