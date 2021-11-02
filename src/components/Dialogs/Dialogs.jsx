import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogElemnts = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messageElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let searchElementText = React.createRef();

  let addSearch = () => {
    let text = searchElementText.current.value;
    alert(text)
  };

  return (
    <div className={s.dialogs}>
      <div className={s.search}>
        <input type="text" placeholder="Type the word you want to find..." ref={searchElementText}></input>
        <div>
          <button onClick={addSearch}>Search</button>
        </div>
      </div>
      <div className={s.dialogsItems}>{dialogElemnts}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
