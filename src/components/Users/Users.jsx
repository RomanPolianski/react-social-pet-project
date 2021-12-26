import s from "./Users.module.css";
import defaultAvatar from "../../assets/images/default_user_avatar.png";
import React from "react";
import Preloader from "../common/Preloader";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesAmount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesAmount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div>{props.isFetching ? <Preloader /> : null}</div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.setCurrentPage(p);
                props.onPageChanged(p);
              }} 
            >
              {`${p} `}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className={s.wrapper} key={u.id}>
          <div className={s.leftSide}>
            <div className={s.avatar}>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small != null ? u.photos.small : defaultAvatar}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button disabled={props.followingProgress.some(id => id === u.id)}
                  onClick={() => props.unfollow(u.id) }
                >
                  Unfollow
                </button>
              ) : (
                <button disabled={props.followingProgress.some(id => id === u.id)}
                  onClick={() => props.follow(u.id) }
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={s.rightSide}>
            <div>
              <span className={s.name}>{u.name}</span>
            </div>
            <div>{u.status}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Users;
