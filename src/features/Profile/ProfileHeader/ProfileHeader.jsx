import React, { useEffect, useState } from "react";
import classes from "./ProfileHeader.module.scss";
import header from "../../../img/image 4.png";
import avatar from "../../../img/avatar.jpg";
import { SvgSelector } from "../../../components/SvgSelector/SvgSelector";
import { connect } from "react-redux";
import { changeStatus, hideEdit, setStatus, showEdit } from "../../../actions";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileReduxForm from "./ProfileDataForm";

const ProfileHeader = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [changePhoto, setChangePhoto] = useState(false);
  const [status, setStatus] = useState("");
  const [profileEditMode, setProfileEditMode] = useState(false);

  const onChangeStatus = (newStatus) => {
    setStatus(newStatus);
  };
  const onShowEdit = () => {
    setEditMode(true);
  };
  const onHideEdit = () => {
    setEditMode(false);
  };
  const handleChangePhoto = () => {
    changePhoto ? setChangePhoto(false) : setChangePhoto(true);
  };
  const onMainPhotoSelected = (event) => {
    event.target.files.length && props.savePhoto(event.target.files[0]);
  };
  const onSubmit = (formData) => {
    setProfileEditMode(false);
    props.saveProfile(formData);
  };
  useEffect(() => {
    props.status && setStatus(props.status);
  }, [props.status]);
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
              <img
                src={
                  props.profile && props.profile.photos.small
                    ? props.profile.photos.small
                    : avatar
                }
                alt=""
              />
            </div>
            <div className={`${classes["header-unique-name"]} unique-name`}>
              {props.profile ? `@user${props.profile.userId}` : props.email}
            </div>
          </div>
        </div>
        <div className={classes["about-user"]}>
          <div className={classes["about-user__content"]}>
            <div className={classes.username}>
              <p>{props.profile ? props.profile.fullName : props.login}</p>
            </div>
            <ProfileStatusWithHooks
              {...props}
              owner={props.owner}
              status={props.status}
              updateStatus={props.updateStatus}
              onHideEdit={onHideEdit}
              onShowEdit={onShowEdit}
              editMode={editMode}
              onChangeStatus={onChangeStatus}
              newStatus={status}
              getStatus={props.getStatus}
            />
            <ProfileReduxForm
              {...props}
              owner={props.owner}
              onSubmit={onSubmit}
              profileEditMode={profileEditMode}
              setProfileEditMode={setProfileEditMode}
            />
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
          {props.owner && (
            <div className={classes["change-container"]}>
              <input
                type="file"
                name="file"
                className={changePhoto ? classes.change : classes.hide}
                onChange={onMainPhotoSelected}
              />
              <button onClick={handleChangePhoto} className={classes.more}>
                <SvgSelector id="more" />
              </button>
            </div>
          )}
        </div>
        {editMode && <div className="backdrop" onClick={onHideEdit} />}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { profileReducer } = state;
  return {
    edit: profileReducer.edit,
    status: profileReducer.status,
  };
}

export default connect(mapStateToProps, {
  showEdit,
  hideEdit,
  changeStatus,
  setStatus,
})(ProfileHeader);
