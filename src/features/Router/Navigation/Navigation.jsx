import React from "react";
import classes from "./Navigation.module.scss";
import avatar from "../../../img/avatar.jpg";
import { SvgSelector } from "../../../components/SvgSelector/SvgSelector";
import AboutProfile from "./AboutProfile/AboutProfile";
import NavList from "./NavList/NavList";

const Navigation = (props) => {
  return (
    <nav className={classes.sidebar}>
      <AboutProfile />
      <NavList />
    </nav>
  );
};

export default Navigation;
