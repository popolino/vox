import "./App.scss";
import "./reset.css";
import React from "react";
import Router from "./features/Router/Router";
import {
  Routes,
  Route,
  useParams,
  HashRouter,
} from "react-router-dom";
import AuthContainer from "./features/Auth/AuthContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { getFriendsThunk } from "./Reducers/UsersReducer";
import { initializeAppThunk } from "./Reducers/AppReducer";
import Preloader from "./components/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeAppThunk();
    this.props.getFriendsThunk();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <HashRouter>
        <Routes>
          <Route path="/auth/*" element={<AuthContainer {...this.props} />} />
          <Route path="/*" element={<Router {...this.props} />} />
        </Routes>
      </HashRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.appReducer.initialized,
    friends: state.usersReducer.friends,
    wallData: state.profileReducer.wallData,
  };
};

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

export default compose(
  connect(mapStateToProps, {
    initializeAppThunk,
    getFriendsThunk,
  }),
  withRouter
)(App);
