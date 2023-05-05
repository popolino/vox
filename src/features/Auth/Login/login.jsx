import React from "react";
import classes from "../Auth.module.scss";
import LoginReduxForm from "./LoginForm";
import { connect } from "react-redux";
import { loginThunk, logoutThunk } from "../../../Reducers/AuthReducer";
import { Navigate } from "react-router";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunk(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <>
      <div className={classes.title}>
        <h1>Welcome back</h1>
      </div>
      <div className={classes.body}>
        <div className={classes.phrase}>
          <h2>Please enter your details</h2>
          <a href="#">Forget password?</a>
        </div>
        <LoginReduxForm onSubmit={onSubmit} />
        <p className={classes.separator}>or</p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { authReducer } = state;
  return {
    isAuth: authReducer.isAuth,
  };
};

export default connect(mapStateToProps, { loginThunk, logoutThunk })(Login);
