import * as React from "react";
import SidebarFriends from "./SidebarFriends";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "../../../App";

class SidebarFriendsContainer extends React.Component {
  render() {
    return <SidebarFriends {...this.props} />;
  }
}
export default compose(connect(null, {}), withRouter)(SidebarFriendsContainer);
