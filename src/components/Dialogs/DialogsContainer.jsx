import React from "react";
import {
  addDialogActionCreator,
  sendMessageCreator,
  updateDialogsActionCreator,
  updateMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let dialogElements = state.messagesPage.dialogs;
        let messageElements = state.messagesPage.messages;
        let valueSearch = state.messagesPage.newDialogUser;
        let valueMessage = state.messagesPage.messages.newMessageBody;

        let addDialog = () => {
          store.dispatch(addDialogActionCreator());
        };

        let onInputChange = (body) => {
          store.dispatch(updateDialogsActionCreator(body));
        };

        let sendMessage = () => {
          store.dispatch(sendMessageCreator());
        };

        let onMessageInputChange = (body) => {
          store.dispatch(updateMessageBodyCreator(body));
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
