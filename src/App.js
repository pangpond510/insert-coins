import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import MobileContentView from "./components/MobileContentView";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <MobileContentView avgPrice="30" lowPrice="28" lowPlace="somewhere" />
        <Header />
      </div>
    );
  }
}

export default App;
