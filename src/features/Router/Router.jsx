import React from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import SidebarFriends from "./SidebarFriends/SidebarFriends";
import store from "../../state";

const Router = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Navigation />
      <div className="container-main">
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<Profile />}></Route>
        </Routes>
      </div>
      <SidebarFriends friendsData={store.friendsData} />
    </main>
  </BrowserRouter>
);

export default Router;
