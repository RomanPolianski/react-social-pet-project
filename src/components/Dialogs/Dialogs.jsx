import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let dialogElemnts = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messageElements = props.state.messages.map((m) => (
    <Message message={m.message}/>
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElemnts}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
