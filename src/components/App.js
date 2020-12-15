import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogBox from "./HogBox"


class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <HogBox hogs={hogs}/>
      </div>
    );
  }
}

export default App;
