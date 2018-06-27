import React, { Component } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <h1>Hi</h1>
        <Feed />
      </div>
    );
  }
}

export default App;
