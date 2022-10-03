import React from "react";
import classes from "./NavList.module.scss";
import { SvgSelector } from "../../../../components/SvgSelector/SvgSelector";
import { NavLink } from "react-router-dom";
import { NavLinkComponent } from "./NavLinkComponent";

const NavList = () => (
  <div className={classes.navigation}>
    <NavLinkComponent path="/friends" id="friends" section="Friends" />
    <NavLinkComponent path="/messenger" id="messenger" section="Messenger" />
    <NavLinkComponent
      path="/communities"
      id="communities"
      section="Communities"
    />
    <NavLinkComponent path="/music" id="music" section="Music" />
    <NavLinkComponent path="/videos" id="videos" section="Videos" />
    <NavLinkComponent path="/feed" id="feed" section="Feed" />
    <NavLinkComponent path="/settings" id="settings" section="Settings" />
  </div>
);

export default NavList;
