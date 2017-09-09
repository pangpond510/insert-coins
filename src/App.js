import React, { Component } from "react";
import Header from "./components/Header";
import MobileView from "./components/MobileView";
import Overview from "./components/Overview";
import IndivView from "./components/IndivView";
import CompareView from "./components/CompareView";
import "./App.css";

const TAB = {
  OVERVIEW: 'overview',
  INDIVIDUAL: 'individual',
  COMPARE: 'compare',
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onMobile: false,
      current: TAB.OVERVIEW
    };

    this.updateDevice = this.updateDevice.bind(this);
    this.updateTopic = this.updateTopic.bind(this);
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

  updateTopic(topic) {
    this.setState({
      current: topic
    });
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
        {!this.state.onMobile && (
          <div>
            <Header onTopicChange={this.updateTopic} />
            {this.state.current === TAB.OVERVIEW && (
              <div>
                <Overview
                  avgPrice="30"
                  lowPrice="28"
                  lowPlace="somewhere"
                  highPrice="32"
                  highPlace="somewhere"
                />
              </div>
            )}
            {this.state.current === TAB.INDIVIDUAL && (
              <div>
                <IndivView avgPrice="30" avgVolume="32" />
              </div>
            )}
            {this.state.current === TAB.COMPARE && (
              <div>
                <CompareView />>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
