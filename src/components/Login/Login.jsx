import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { sendLoginData } from "../../redux/auth-reducer";

const Login = (props) => {
  let onSubmit = (formData) => {
    console.log(formData);
    props.sendLoginData(formData);
  };
  return (
    <>
      <h1>Login</h1>
      <LoginFormRedux onSubmit={onSubmit} />
    </>
  );
};

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Login"} name={"email"} component={"input"} />
        </div>
        <div>
          <Field
            placeholder={"Password"}
            name={"password"}
            component={"input"}
            type={"password"}
          />
        </div>
        <div>
          Remember me
          <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
        </div>
        <div>
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
