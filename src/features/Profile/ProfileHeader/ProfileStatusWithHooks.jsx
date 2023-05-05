import classes from "./ProfileHeader.module.scss";
import React from "react";

const ProfileStatusWithHooks = (props) => {
  console.log(props.status);
  return (
    <div>
      {props.editMode && (
        <div className={classes.edit}>
          <input
            type="text"
            onChange={(event) => props.onChangeStatus(event.target.value)}
            defaultValue={props.status}
          />
          <button
            className={classes.button}
            onClick={() => {
              props.onHideEdit();
              props.updateStatus(props.newStatus);
              props.getStatus(props.id);
            }}
          >
            save
          </button>
        </div>
      )}
      {props.profile && props.profile.userId === props.id && (
        <button
          className={classes.status}
          onClick={() => {
            props.onShowEdit();
          }}
        >
          {!props.newStatus ? props.status : props.newStatus}
          {!props.status && !props.newStatus && (
            <p>Click here to post status</p>
          )}
        </button>
      )}
      {props.profile && props.profile.userId !== props.id && props.status && (
        <div className={classes.status}>
          <p>{props.status}</p>
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHooks;
