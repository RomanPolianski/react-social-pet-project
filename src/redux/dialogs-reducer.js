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
        "https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg",
    },
    {
      id: "2",
      name: "Dasha",
      avatar:
        "https://pbs.twimg.com/media/DtAGYO3W0AAr1v1.jpg",
    },
    {
      id: "3",
      name: "Pasha",
      avatar:
        "https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg",
    },
    {
      id: "4",
      name: "Sasha",
      avatar:
        "https://ae01.alicdn.com/kf/HTB1CFGDk5AnBKNjSZFvq6yTKXXaM/Langsdom-BX6-Bluetooth.jpg",
    },
    {
      id: "5",
      name: "Boris",
      avatar:
        "https://profile-images.xing.com/images/afeb0407378b4a3c6e78c0a799720ff5-5/torben-schwierzke.1024x1024.jpg",
    },
  ],
  messages: [
    { message: "Hi how are u?" },
    { message: "Why nobody loves me?" },
    { message: "where r u? im gettin nervous shit!!" },
    { message: "i dont care" },
    { message: "Sounds niceee?" },
  ],

};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG:
      let newDialog = {
        id: "1",
        name: action.user,
        avatar:
          "https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg",
      };

      return {
        ...state,
        dialogs: [...state.dialogs, newDialog],
      };
   
    case UPDATE_DIALOGS:
      return {
        ...state,
        newDialogUser: action.newText,
      };
  

    case SEND_MESSAGE:

      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, {message: action.message}],
        
      }
  

    default:
      return state;
  }
};

export const sendMessage = (message) => {
  debugger;
  return {
    type: SEND_MESSAGE,
    message,
  };
};

export const addDialog = (user) => {
  debugger;
  return {
    type: ADD_DIALOG,
    user,
  };
};

export const updateDialogsActionCreator = (text) => {
  return {
    type: UPDATE_DIALOGS,
    newText: text,
  };
};

export default dialogsReducer;
