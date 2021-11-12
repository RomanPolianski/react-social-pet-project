const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_DIALOGS = "UPDATE-DIALOGS";

let initialState = {
  dialogs: [
    {
      id: "1",
      name: "Masha",
      avatar:
        "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile1.jpg",
    },
    {
      id: "2",
      name: "Dasha",
      avatar:
        "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile2.jpg",
    },
    {
      id: "3",
      name: "Pasha",
      avatar:
        "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile4.jpg",
    },
    {
      id: "4",
      name: "Sasha",
      avatar:
        "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile5.jpg",
    },
    {
      id: "5",
      name: "Boris",
      avatar:
        "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile6.jpg",
    },
  ],
  messages: [
    { message: "Hi how are u?" },
    { message: "Why nobody loves me?" },
    { message: "where r u? im gettin nervous shit!!" },
    { message: "i dont care" },
    { message: "Sounds niceee?" },
  ],

  newMessageBody: "hi",
  newDialogUser: "Type the person you want to chat with",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG:
      let newDialog = {
        id: "1",
        name: state.newDialogUser,
        avatar:
          "http://v.bootstrapmb.com/2017/12/xj70323/images/profile/profile1.jpg",
      };
      state.dialogs.push(newDialog);
      state.newDialogUser = "";
      return state;
    case UPDATE_DIALOGS:
      state.newDialogUser = action.newText;
      return state;
    case SEND_MESSAGE:
      let newMessage = state.messages.newMessageBody;
      state.messages.push({ message: newMessage });
      state.messages.newMessage = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.messages.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateMessageBodyCreator = (body) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    body: body,
  };
};

export const addDialogActionCreator = () => {
  return {
    type: ADD_DIALOG,
  };
};

export const updateDialogsActionCreator = (text) => {
  return {
    type: UPDATE_DIALOGS,
    newText: text,
  };
};

export default dialogsReducer;
