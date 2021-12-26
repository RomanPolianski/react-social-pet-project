import s from "./ProfileInfo.module.css";
import bg from "../../../img/bg1.jpg";
import Preloader from "../../common/Preloader";
import defaultAvatar from "../../../assets/images/default_user_avatar.png";
import ProfileStatus from "./Status/Status";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div className={s.background}>
        <img src={bg} alt="backgroud" />
      </div>
      <div className={s.wrapper}>
        <div className={s.name_pic}>
          <div className={s.avatar}>
            <img
              src={
                props.profile.photos.small
                  ? props.profile.photos.small
                  : defaultAvatar
              }
              alt="avatar"
            />
          </div>
        </div>
        <div className={s.bio}>
          <div className={s.userName}>
            <h2>{props.profile.fullName}</h2>
          </div>
          <div>
            <div>
              <ProfileStatus
                profile={props.profile}
                profileStatus={props.profileStatus}
                authId={props.authId}
                updateProfileStatus={props.updateProfileStatus}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
