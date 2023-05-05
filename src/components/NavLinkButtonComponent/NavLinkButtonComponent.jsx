import { NavLink } from "react-router-dom";
import classes from "./NavLinkButtonComponent.module.scss";
import React from "react";

export const NavLinkButtonComponent = (props) => (
  <NavLink to={props.path}>
    <button className={classes.button}>Sign in</button>
  </NavLink>
);
