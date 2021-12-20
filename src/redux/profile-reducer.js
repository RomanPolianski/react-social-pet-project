import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  posts: [
    {
      id: "1",
      name: "Pasha",
      avatar: "https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg",
      message: "Im doin' so well i cant lie",
      likeCount: 1,
      postimg:
        "https://imgix.bustle.com/2017/5/11/a088adaa-c586-42e2-a717-5b753ed57b7c.jpg",
    },
    {
      id: "2",
      name: "Sasha",
      avatar:
        "https://ae01.alicdn.com/kf/HTB1CFGDk5AnBKNjSZFvq6yTKXXaM/Langsdom-BX6-Bluetooth.jpg",
      message: "Why nobody loves me?",
      likeCount: 20,
      postimg:
        "https://www.banyanmentalhealth.com/wp-content/uploads/2019/08/depression.jpg",
    },
    {
      id: "3",
      name: "Boris",
      avatar:
        "https://profile-images.xing.com/images/afeb0407378b4a3c6e78c0a799720ff5-5/torben-schwierzke.1024x1024.jpg",
      message: "I dont care im ballin nig!!!",
      likeCount: 212,
      postimg:
        "https://i.cbc.ca/1.5645636.1594411598!/fileImage/httpImage/elam-ending-071020.jpg",
    },
  ],

  newPostText: "it-kamasutra",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: "4",
        name: "Boris",
        avatar:
          "https://profile-images.xing.com/images/afeb0407378b4a3c6e78c0a799720ff5-5/torben-schwierzke.1024x1024.jpg",
        message: state.newPostText,
        likeCount: 212,
        postimg:
          "https://i.cbc.ca/1.5645636.1594411598!/fileImage/httpImage/elam-ending-071020.jpg",
      };
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost],
      };

    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_USER_STATUS:
      return {
        ...state,
        profileStatus: action.status,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    newText: text,
  };
};

export const setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile,
  };
};

export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status,
  };
};

export const getUser = (userId) => {
  return (dispatch) => {
    usersAPI.getUser(userId).then((response) => {
      dispatch(setUsersProfile(response.data));
    });
  };
};

export const getProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
  };
};

export const updateProfileStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateProfileStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export default profileReducer;
