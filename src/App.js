import "./App.css";
import Nav from "./components/Navbar/Nav";
import { Route } from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import React from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MusicContainer from "./components/Music/Music";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <SidebarContainer />
      <div className="app-wrapper-content">
        <Route path='/profile/:userId?'>
          <ProfileContainer />
        </Route>
        <Route path="/dialogs">
          <DialogsContainer />
        </Route>
        <Route path="/news" component={News} />
        <Route path="/music">
        <MusicContainer />
        </Route>
        <Route path="/settings" component={Settings} />
        <Route path="/users">
          <UsersContainer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </div>
  );
  
}; 

export default App;
