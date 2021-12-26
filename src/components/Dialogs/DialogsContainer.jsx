import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addDialog, sendMessage } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogElements: state.messagesPage.dialogs,
    messageElements: state.messagesPage.messages,
    valueSearch: state.messagesPage.newDialogUser,
    valueMessage: state.messagesPage.newMessageBody,
  };
};

export default compose(
  connect(mapStateToProps, { addDialog, sendMessage }),
  withAuthRedirect
)(Dialogs);
