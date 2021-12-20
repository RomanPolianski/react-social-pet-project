import s from "./Header.module.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={s.header}>
        <img src={logo} alt="logo" />
        <div className={s.loginBlock}>
          {props.userAuth.isAuth ? (
            props.userAuth.login
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
