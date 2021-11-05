import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
  debugger;

  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Sidebar state={props.state.sidebar}/>
        <div className="app-wrapper-content">
          <Route path="/profile">
            <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
          </Route>
          <Route exact path="/dialogs">
            <Dialogs state={props.state.messagesPage} />
          </Route>
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
  );
};

export default App;
