import s from "./Header.module.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Header = (props) => {
  debugger;

  let logoutUser = () => {
    props.logOutUser()
    if (props.isAuth) return <Redirect to={"/profile"} />;
  }
  return (
    <>
      <header className={s.header}>
        <img src={logo} alt="logo" />
        <div className={s.loginBlock}>
          <div>
            {props.userAuth.isAuth ?
              <button onClick={logoutUser}>LogOut</button> : null
            }
          </div>
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
