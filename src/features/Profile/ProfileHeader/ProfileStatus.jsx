import classes from "./ProfileHeader.module.scss";
import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode && (
          <div className={classes.edit}>
            <input
              type="text"
              onChange={this.onStatusChange}
              defaultValue={this.props.status}
            />
            <button
              className={classes.button}
              onClick={() => {
                this.deactivateEditMode();
                this.props.setStatus(this.state.status);
                this.props.hideEdit();
              }}
            >
              save
            </button>
          </div>
        )}
        {!this.props.profile && (
          <button
            className={classes.status}
            onClick={() => {
              this.activateEditMode();
              this.props.showEdit();
            }}
          >
            {this.props.status || <p>Click here to post status</p>}
          </button>
        )}
        {this.props.profile && (
          <div className={classes.status}>
            <p>{this.props.status}</p>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
