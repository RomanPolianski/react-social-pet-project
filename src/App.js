import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import { Route } from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <SidebarContainer />
      <div className="app-wrapper-content">
        <Route path="/profile">
          <Profile />
        </Route>
        <Route exact path="/dialogs">
          <DialogsContainer />
        </Route>
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/users">
          <UsersContainer />
        </Route>
      </div>
    </div>
  );
};

export default App;
