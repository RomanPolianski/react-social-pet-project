import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogElemnts = props.messagesPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messageElements = props.messagesPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let searchElementText = React.createRef();

  let addDialog = () => {
    props.dispatch({type: "ADD-DIALOG"});
  };

  let onInputChange = () => {
    let text = searchElementText.current.value;
    props.dispatch({type: "UPDATE-DIALOGS", newText: text});
  };

  return (
    <div className={s.dialogs}>
      <div className={s.newdialog}>
        <input
          type="text"
          onChange={onInputChange}
          value={props.messagesPage.newDialogUser}
          ref={searchElementText}
        />
        <div>
          <button onClick={addDialog}>Search</button>
        </div>
      </div>
      <div className={s.dialogsItems}>{dialogElemnts}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
