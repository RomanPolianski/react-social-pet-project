import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {
  debugger;
  let dialogElements = props.dialogElements.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messageElements = props.messageElements.map((m) => (
    <Message message={m.message} />
  ));

  let addDialog = () => {
    props.addDialogActionCreator();
  };

  let onInputChange = (e) => {
    let text = e.target.value;
    props.updateDialogsActionCreator(text);
  };

  let sendMessage = () => {
    props.sendMessageCreator();
  };

  let onMessageInputChange = (e) => {
    let body = e.target.value;
    props.updateMessageBodyCreator(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.newdialog}>
        <input
          type="text"
          onChange={onInputChange}
          value={props.valueSearch}
        />
        <div>
          <button onClick={addDialog}>Search</button>
        </div>
      </div>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
      <div className={s.newMessage}>
        <input
          type="text"
          onChange={onMessageInputChange}
          value={props.valueMessage}
        />
      </div>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
