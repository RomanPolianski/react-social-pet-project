import { connect } from "react-redux";
import {
  setCurrentPage,
  toggleFollow,
  toggleIsFollowingProgress,
  getUsers,
  follow,
  unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = () => {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        totalCount={this.props.totalCount}
        toggleFollow={this.props.toggleFollow}
        onPageChanged={this.onPageChanged}
        isFetching={this.props.isFetching}
        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        followingProgress={this.props.followingProgress}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setCurrentPage={this.props.setCurrentPage}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//     setTotalUsersCount: (totalCount) =>
//       dispatch(setTotalUsersCountAC(totalCount)),
//     toggleIsFetching: (isFetching) => dispatch(isFetchingToggleAC(isFetching)),
//   };
// };

export default compose(
  connect(mapStateToProps, {
    toggleFollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect
)(UsersContainer);
