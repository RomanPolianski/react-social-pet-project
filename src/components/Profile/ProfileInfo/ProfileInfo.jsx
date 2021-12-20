import s from "./ProfileInfo.module.css";
import bg from "../../../img/bg1.jpg";
import Preloader from "../../common/Preloader";
import defaultAvatar from "../../../assets/images/default_user_avatar.png";
import ProfileStatus from "./Status/Status";

const ProfileInfo = (props) => {
  debugger;
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
            <h2>{props.profile.fullName ? props.profile.fullName : "Roman"}</h2>
          </div>
          <div>
            <div>
              <ProfileStatus profile={props.profile} profileStatus={props.profileStatus} authId={props.authId} updateProfileStatus={props.updateProfileStatus}/>
            </div>
            {/* <span className={s.property}>Birth date:</span>
            <span className={s.value}>03/01/2001</span> */}
          </div>
          {/* <div>
            <span className={s.property}>City: </span>
            <span className={s.value}>Minsk</span>
          </div>
          <div>
            <span className={s.property}>Education: </span>
            <span className={s.value}>BSUIR '22</span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
