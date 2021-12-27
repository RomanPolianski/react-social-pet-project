import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { sendLoginData } from "../../redux/auth-reducer";
import s from "./Login.module.css"; 

const Login = (props) => {
  let onSubmit = (formData) => {
    console.log(formData);
    props.sendLoginData(formData);
  };
  return (
    <>
      <h1>Login</h1>
      <LoginFormRedux onSubmit={onSubmit} />
      <p>Use to demo <b>login:</b> free@samuraijs.com <b>password:</b> free</p>
    </>
  );
};

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div className={s.field}>
          <Field placeholder={"Login"} name={"email"} component={"input"} />
        </div>
        <div className={s.field}>
          <Field
            placeholder={"Password"}
            name={"password"}
            component={"input"}
            type={"password"}
          />
        </div>
        <div className={s.field}>
          Remember me
          <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
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
        
      };
    };

const LoginFormRedux = reduxForm({ form: "login" })(LoginForm);

export default connect(mapStateToProps, { sendLoginData })(Login);
