import { getProfileStatus, getUser, updateProfileStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  state = {
    isOwnProfile: true
  }

  setToOtherProfile = () => {
    this.setState({
      isOwnProfile: false
    })
  }
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = this.props.authId
    } else {
      userId = this.props.match.params.userId;
      this.setToOtherProfile()
    }
    this.props.getUser(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    debugger;
    return <Profile {...this.props} userId={this.userId} isOwnProfile={this.state.isOwnProfile} profile={this.props.profile} profileStatus={this.props.profileStatus} authId={this.props.authId} updateProfileStatus={this.props.updateProfileStatus}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus,
    authId: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, { getUser, getProfileStatus, updateProfileStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

