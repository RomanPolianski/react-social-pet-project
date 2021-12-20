import { followAPI, usersAPI } from "../api/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  totalCount: 19,
  pageSize: 10,
  currentPage: 1,
  isFetching: true,
  followingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalCount: action.totalCount.toString().slice(1, 3),
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingProgress: action.isFollowing
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const toggleFollow = (userId) => {
  return {
    type: TOGGLE_FOLLOW,
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const toggleIsFollowingProgress = (isFollowing, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowing,
    userId,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(setUsers(response.data.items));
      dispatch(setTotalUsersCount(response.data.totalCount));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    followAPI.followUser(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(toggleFollow(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    followAPI.unfollowUser(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(toggleFollow(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
