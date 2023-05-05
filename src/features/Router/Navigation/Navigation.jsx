import React from "react";
import classes from "./Navigation.module.scss";
import NavList from "./NavList/NavList";
import AboutProfileContainer from "./AboutProfile/AboutProfileContainer";

const Navigation = (props) => {
  return (
    <nav className={classes.sidebar}>
      <AboutProfileContainer {...props} />
      <NavList />
    </nav>
  );
};

export default Navigation;
