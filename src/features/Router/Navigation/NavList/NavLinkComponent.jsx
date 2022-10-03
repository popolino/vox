import React from "react";
import classes from "./NavList.module.scss";
import { SvgSelector } from "../../../../components/SvgSelector/SvgSelector";
import { NavLink } from "react-router-dom";

export const NavLinkComponent = (props) => (
  <NavLink
    to={props.path}
    className={(navData) =>
      navData.isActive ? `${classes.active} ${classes.link}` : classes.link
    }
  >
    <div>
      <SvgSelector id={props.id} className={classes["navigation-svg"]} />
    </div>
    <div className={classes.section}>{props.section}</div>
  </NavLink>
);
