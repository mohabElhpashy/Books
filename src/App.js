import "./App.css";
import { Component } from "react";
import img1 from "../src/imgs/images.jpg";
import img2 from "../src/imgs/o9YeaK.jpg";
class App extends Component {
  state = {
    img: [img1, img2],
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
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <div className="maindiv">
          {" "}
          <h1>Book Site</h1>
        </div>
      </div>
    );
  }
}

export default App;
