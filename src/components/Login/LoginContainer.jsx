import React from "react";
import { connect } from "react-redux";
import { sendLoginData } from "../../redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends React.Component {
  render() {
    return <Login/>;
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    
  };
};

export default connect(mapStateToProps, { sendLoginData })(LoginContainer);
