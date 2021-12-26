import "./Profile";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

let Profile = (props) => {
  debugger
  return (
    <div className={s.content}>
      <ProfileInfo
        profile={props.profile}
        profileStatus={props.profileStatus}
        authId={props.authId}
        updateProfileStatus={props.updateProfileStatus}
      />
      {props.isOwnProfile ? <MyPostsContainer store={props.store} /> : null}
    </div>
  );
};

export default Profile;
