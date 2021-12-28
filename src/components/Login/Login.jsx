import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Field, reduxForm } from "redux-form";
import { sendLoginData } from "../../redux/auth-reducer";
import { maxLength, requiredField } from "../../utils/validators/validator";
import { Input } from "../common/FormsControls/FormsControl";
import s from "./Login.module.css";

const Login = (props) => {
  let onSubmit = (formData) => {
    console.log(formData);
    props.sendLoginData(formData);
  };

  if (props.isAuth){
    return <Redirect to={"/profile"} />
  }
  return (
    <>
      <h1>Login</h1>
      <LoginFormRedux onSubmit={onSubmit} />
      <p>
        Use to demo <b>login:</b> free@samuraijs.com <b>password:</b> free
      </p>
    </>
  );
};
let MaxLength30 = maxLength(30)
const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div className={s.field}>
          <Field placeholder={"Login"} name={"email"} component={Input} validate={[requiredField, MaxLength30]}/>
        </div>
        <div className={s.field}>
          <Field
            placeholder={"Password"}
            name={"password"}
            component={Input}
            type={"password"}
            validate={[requiredField]}
          />
        </div>
        <div className={s.field}>
          Remember me
          <span className={s.checkbox}>
            <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
          </span>
        </div>
        <div className={s.field}>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  };
};

const LoginFormRedux = reduxForm({ form: "login" })(LoginForm);

export default connect(mapStateToProps, { sendLoginData })(Login);
