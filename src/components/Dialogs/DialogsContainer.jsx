import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addDialogActionCreator,
  sendMessageCreator,
  updateDialogsActionCreator,
  updateMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogElements: state.messagesPage.dialogs,
    messageElements: state.messagesPage.messages,
    valueSearch: state.messagesPage.newDialogUser,
    valueMessage: state.messagesPage.newMessageBody,
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
