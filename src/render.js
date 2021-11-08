import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (
  state,
  addPost,
  updateNewPostText,
  updateDialogs,
  addDialog
) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          updateDialogs={updateDialogs}
          addDialog={addDialog}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
