import React from "react";
import classes from "./ProfileHeader.module.scss";
import header from "../../../img/image 4.png";
import avatar from "../../../img/avatar.jpg";
import { SvgSelector } from "../../../components/SvgSelector/SvgSelector";
import { connect } from "react-redux";

const ProfileHeader = ({ status }) => {
  return (
    <div className={classes.header}>
      <div className={classes.image}>
        <img src={header} alt="" />
      </div>
      <div className={classes["profile-header"]}>
        <div className={classes["profile-header__container"]}>
          <div className={classes["profile-header__content"]}>
            <div
              className={`${classes["header-avatar"]} sidebar__profile_photo`}
            >
              <img src={avatar} alt="" />
            </div>
            <div className={`${classes["header-unique-name"]} unique-name`}>
              @pizdosovaya
            </div>
          </div>
        </div>
        <div className={classes["about-user"]}>
          <div className={classes["about-user__content"]}>
            <div className={classes.username}>
              <p>Polina As Fuck</p>
            </div>
            <div className={classes.edit}>
              <input type="text" />
              <button className={classes.button}>save</button>
            </div>
            <button className={classes.status}>{status}</button>
          </div>
          <div className={classes.online}>
            <p>Last seen 22 minutes ago</p>
          </div>
        </div>
        <div className={classes["user-data"]}>
          <div className={classes.counters}>
            <div className={classes.counter}>
              <div className={classes.number}>
                <p>68</p>
              </div>
              <div className={classes.title}>
                <p>Photos</p>
              </div>
            </div>
            <div className={classes.counter}>
              <div className={classes.number}>
                <p>568</p>
              </div>
              <div className={classes.title}>
                <p>Followers</p>
              </div>
            </div>
            <div className={classes.counter}>
              <div className={classes.number}>
                <p>5.5k</p>
              </div>
              <div className={classes.title}>
                <p>Friends</p>
              </div>
            </div>
          </div>
          <SvgSelector id="more" className={classes.more} />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { profileReducer } = state;

  return {
    status: profileReducer.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
