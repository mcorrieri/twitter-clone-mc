import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";

function App() {
  return (
    <div className="app">
      <h1 className="title"></h1>

      {/* Sidebar  */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
