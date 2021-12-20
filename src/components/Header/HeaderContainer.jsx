import Header from "./Header";
import React from "react";
import { getAuthData } from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    userAuth: state.auth,
  };
};

export default connect(mapStateToProps, {getAuthData})(HeaderContainer);
