import React from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import UsersAPIComponent from "../Friends/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import SidebarFriendsContainer from "./SidebarFriends/SidebarFriendsContainer";

const Router = (props) => {
  return (
    <>
      <Header />
      <main>
        <Navigation {...props} />
        <div className="container-main">
          <Routes>
            <Route
              path="/profile/:userId"
              element={<ProfileContainer {...props} />}
            />
            <Route path="/profile/" element={<ProfileContainer {...props} />} />
            <Route path="/" element={<ProfileContainer {...props} />} />
            <Route path="/friends" element={<UsersAPIComponent {...props} />} />
          </Routes>
        </div>
        <SidebarFriendsContainer {...props} />
      </main>
    </>
  );
};

export default Router;
