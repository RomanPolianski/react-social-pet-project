import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, requiredField } from "../../utils/validators/validator";
import { Input } from "../common/FormsControls/FormsControl";



const Dialogs = (props) => {
  let dialogElements = props.dialogElements.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messageElements = props.messageElements.map((m) => (
    <Message message={m.message} />
  ));

  let onSubmitDialog = (formData) => {
    props.addDialog(formData.newDialog);
  };

  let onSubmitMessage = (formData) => {
    props.sendMessage(formData.newDialog);
  };

  return (
    <div className={s.dialogs}>
      <NewDialogFormRedux onSubmit={onSubmitDialog} />
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
      <NewMessageFormRedux onSubmit={onSubmitMessage} />
    </div>
  );
};
let MaxLengthCreator = maxLength(20);
const NewDialog = (props) => {
  return (
    <div className={s.newdialog}>
      <form onSubmit={props.handleSubmit}>
        <Field type="text" component={Input} name={"newDialog"} validate={[requiredField, MaxLengthCreator]}/>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

const NewMessage = (props) => {
  return (
    <div className={s.newMessage}>
      <form onSubmit={props.handleSubmit}>
        <Field type="text" name={"newDialog"} component={Input} validate={[requiredField, MaxLengthCreator]}/>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

const NewDialogFormRedux = reduxForm({ form: "newDialog" })(NewDialog);
const NewMessageFormRedux = reduxForm({ form: "newMessage" })(NewMessage);

export default Dialogs;
