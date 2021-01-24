import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import img1 from "../src/imgs/images.jpg";
// import img2 from "../src/imgs/o9YeaK.jpg";'
import Mainapage from "../src/Components/Mainpage/Mainpage";
import Content from "../src/Components/Content/Content";
class App extends Component {
  state = {
    img: [
      "Books are our best friends and one of the best means of education. In the old days, books were written by hand. The block printing system was later developed. The history of bookmaking is really interesting. Today we have a wide variety of books and this was made possible only by technology. Books are one of the best mediums for education.",
      "Books are a good source of information, where we can find the information in a written and pictorial form. In the beginning years, they use to be in a handwritten form which slowly changed into a printed one. They contain various types of information and are the best form of storing knowledge.",
    ],
    index: 0,
  };
  componentDidMount() {
    if (this.state.index === 1) this.setState({ index: 0 });
    setInterval(() => {
      this.setState({
        index: this.state.index + 1,
      });
      if (this.state.index >= this.state.img.length) {
        this.setState({ index: 0 });
      }
    }, 6000);
  }

  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact component={Mainapage} />
          <Route path="/signup" exact component={Content} />
          {/* 
          <Route path="/login" exact component={Home} />
          <Route path="/post" exact component={Post} />
          <Route path="/allposts" exact component={Allposts} /> */}
        </Switch>
      </Router>
      // <div className="app">
      //   < />
      // </div>
    );
  }
}

export default App;
