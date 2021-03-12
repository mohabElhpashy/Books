import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import A from "./Components/ComponanetA";
import { UserProvider } from "./Components/UserContext";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="mohab">
          <A />
        </UserProvider>
      </div>
    );
  }
}

export default App;
