import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: true,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth, isFetching) => {
  return {
    type: SET_USER_DATA,
    data: { id, email, login, isAuth, isFetching },
  };
};

export const getAuthData = () => {
  return (dispatch) => {
    authAPI.getAuthUserData().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true, false));
      }
    });
  };
};

export const sendLoginData = (loginFormData) => {
  return (dispatch) => {
    authAPI.sendLoginRequest(loginFormData).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthData());
      }
    });
  };
};

export const logOutUser = () => {
  return (dispatch) => {
    authAPI.sendLogOutRequest().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, true));
      }
    });
  };
};

export default authReducer;
