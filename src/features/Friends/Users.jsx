import classes from "./Users.module.scss";
import User from "./Friend/User";
import avatar from "../../img/avatar.jpg";
import * as React from "react";
import Paginator from "../../components/Paginator/Paginator";

const Users = (props) => {
  return (
    <>
      <Paginator {...props} />
      <div className={classes.friends}>
        <div className={classes.container}>
          {props.users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              photos={user.photos.small ? user.photos.small : avatar}
              followed={user.followed}
              {...props}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
