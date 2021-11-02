import s from "./ProfileInfo.module.css";
import bg from "../../../img/bg1.jpg";
import roma from "../../../img/romaava.jpg";

const ProfileInfo = (props) => {
  return (
    <>
      <div className={s.background}>
        <img src={bg} alt="backgroud" />
      </div>
      <div className={s.wrapper}>
        <div className={s.name_pic}>
          <div className={s.avatar}>
            <img src={roma} alt="roma avatar" />
          </div>
        </div>
        <div className={s.bio}>
          <div className={s.userName}>
            <h2>Roman Polianki</h2>
          </div>
          <div>
            <span className={s.property}>Birth date:</span>
            <span className={s.value}>03/01/2001</span>
          </div>
          <div>
            <span className={s.property}>City: </span>
            <span className={s.value}>Minsk</span>
          </div>
          <div>
            <span className={s.property}>Education: </span>
            <span className={s.value}>BSUIR '22</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
