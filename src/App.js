import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from "./Components/HookCounter";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hooks />
      </div>
    );
  }
}

export default App;
