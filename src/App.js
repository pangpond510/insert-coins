import React, { Component } from "react";
import Footer from "./components/Footer";
import MobileView from "./components/MobileView";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMobile: false
    };
    this.updateDevice = this.updateDevice.bind(this);
  }
  componentWillMount() {
    this.updateDevice();
    window.addEventListener("resize", this.updateDevice);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDevice);
  }

  updateDevice() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      this.setState({
        onMobile: true
      });
    } else {
      this.setState({
        onMobile: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        {/* <div className="App-Footer">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {this.state.onMobile && (
          <div>
            <MobileView />
          </div>
        )}
      </div>
    );
  }
}

export default App;
