import Header from "./Header";
import React from "react";
import { getAuthData, logOutUser } from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthData();
  }

  render() {
    return <Header {...this.props} logOutUser={this.props.logOutUser}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    userAuth: state.auth,
  };
};

export default connect(mapStateToProps, {getAuthData, logOutUser})(HeaderContainer);
