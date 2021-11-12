import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import {
  addDialogActionCreator,
  sendMessageCreator,
  updateDialogsActionCreator,
  updateMessageBodyCreator,
} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
  let dialogElemnts = props.messagesPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messageElements = props.messagesPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let addDialog = () => {
    props.dispatch(addDialogActionCreator());
  };

  let onInputChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateDialogsActionCreator(text));
  };

  let sendMessage = () => {
    props.dispatch(sendMessageCreator());
  };

  let onMessageInputChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.newdialog}>
        <input
          type="text"
          onChange={onInputChange}
          value={props.messagesPage.newDialogUser}
        />
        <div>
          <button onClick={addDialog}>Search</button>
        </div>
      </div>
      <div className={s.dialogsItems}>{dialogElemnts}</div>
      <div className={s.messages}>{messageElements}</div>
      <div className={s.newMessage}>
        <input
          type="text"
          onChange={onMessageInputChange}
          value={props.messagesPage.messages.newMessageBody}
        />
      </div>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
