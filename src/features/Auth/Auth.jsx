import classes from "./Auth.module.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/login";
import Registration from "./Registration/Registration";
import welcomeImage from "../../img/welcome.png";

const Auth = (props) => {
  return (
    <div className={classes.auth}>
      <div className={classes.container}>
        <div className={classes["picture-container"]}>
          <img src={welcomeImage} alt="" />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.form}>
            <Routes>
              <Route
                path="/login"
                element={<Login isAuth={props.isAuth} {...props} />}
              />
              <Route path="/" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
