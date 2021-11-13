import React from "react";
import {
  addDialogActionCreator,
  sendMessageCreator,
  updateDialogsActionCreator,
  updateMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let dialogElements = state.messagesPage.dialogs;
  let messageElements = state.messagesPage.messages;
  let valueSearch = state.messagesPage.newDialogUser;
  let valueMessage = state.messagesPage.messages.newMessageBody;

  let addDialog = () => {
    props.store.dispatch(addDialogActionCreator());
  };

  let onInputChange = (body) => {
    props.store.dispatch(updateDialogsActionCreator(body));
  };

  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onMessageInputChange = (body) => {
    props.store.dispatch(updateMessageBodyCreator(body));
  };

  return (
    <Dialogs
      addDialogActionCreator={addDialog}
      updateDialogsActionCreator={onInputChange}
      sendMessageCreator={sendMessage}
      updateMessageBodyCreator={onMessageInputChange}
      dialogElements={dialogElements}
      messageElements={messageElements}
      valueSearch={valueSearch}
      valueMessage={valueMessage}
    />
  );
};

export default DialogsContainer;
