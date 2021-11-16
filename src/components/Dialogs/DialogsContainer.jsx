import { connect } from "react-redux";
import {
  addDialogActionCreator,
  sendMessageCreator,
  updateDialogsActionCreator,
  updateMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let dialogElements = state.messagesPage.dialogs;
//         let messageElements = state.messagesPage.messages;
//         let valueSearch = state.messagesPage.newDialogUser;
//         let valueMessage = state.messagesPage.messages.newMessageBody;

//         let addDialog = () => {
//           store.dispatch(addDialogActionCreator());
//         };

//         let onInputChange = (body) => {
//           store.dispatch(updateDialogsActionCreator(body));
//         };

//         let sendMessage = () => {
//           store.dispatch(sendMessageCreator());
//         };

//         let onMessageInputChange = (body) => {
//           store.dispatch(updateMessageBodyCreator(body));
//         };

//         return (
//           <Dialogs
//             addDialogActionCreator={addDialog}
//             updateDialogsActionCreator={onInputChange}
//             sendMessageCreator={sendMessage}
//             updateMessageBodyCreator={onMessageInputChange}
//             dialogElements={dialogElements}
//             messageElements={messageElements}
//             valueSearch={valueSearch}
//             valueMessage={valueMessage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogElements: state.messagesPage.dialogs,
    messageElements: state.messagesPage.messages,
    valueSearch: state.messagesPage.newDialogUser,
    valueMessage: state.messagesPage.messages.newMessageBody,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addDialogActionCreator: () => dispatch(addDialogActionCreator()),
    updateDialogsActionCreator: (body) => dispatch(updateDialogsActionCreator(body)),
    sendMessageCreator: () => dispatch(sendMessageCreator()),
    updateMessageBodyCreator: (body) => dispatch(updateMessageBodyCreator(body)),
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
