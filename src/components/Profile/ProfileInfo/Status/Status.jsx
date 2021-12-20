import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.profileStatus,
  };

  activateEditMode = () => {
    this.props.authId == this.props.profile.userId
      ? this.setState({
          editMode: true,
        })
      : alert("U r not allowed to edit");
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateProfileStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {!this.props.profileStatus ? "No status" : this.props.profileStatus}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              onDoubleClick={this.deactivateEditMode}
              autoFocus={true}
              value={this.state.status}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
