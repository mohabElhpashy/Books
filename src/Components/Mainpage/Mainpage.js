import "./Mainpage.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

class Mainapage extends Component {
  state = {
    img: [
      "'Books are our best friends and one of the best means of education'",
      ", 'where we can find the information in a written and pictorial form'.",
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
  movelogin = () => {
    document.getElementById("sign").style.transform = "translate(-120%, 0)";
    document.getElementById("log").style.transform = "translate(-120%, 0)";

    document.getElementById("log").style.zIndex = "0";
  };
  backlogin = () => {
    document.getElementById("log").style.transform = "translate(10%, 0)";
    document.getElementById("sign").style.transform = "translate(10%, 0)";

    document.getElementById("log").style.zIndex = "1";
  };
  render() {
    return (
      <div className="Mainpage">
        <p
          style={{
            color: "white",
            fontStyle: "italic",
            fontweight: "bold",
            fontSize: "1.5em",
          }}
        >
          {this.state.img[this.state.index]}
        </p>
        <div className="signup">
          <h3 style={{ position: "absolute", left: "100px", top: "50px" }}>
            Don't have an account?
          </h3>
          <h3 style={{ position: "absolute", left: "600px", top: "50px" }}>
            Have an account?
          </h3>
          <Button
            style={{
              position: "absolute",
              left: "200px",
              top: "120px",
              width: "150px",
            }}
            variant="outline-secondary"
            onClick={this.movelogin}
          >
            SiGN UP
          </Button>
          <Button
            style={{
              position: "absolute",
              left: "630px",
              top: "120px",
              width: "150px",
            }}
            variant="outline-secondary"
            onClick={this.backlogin}
          >
            LOG iN
          </Button>
        </div>
        <Form id="log" className="login_form">
          <h1 style={{ color: "#e8716d" }}>LOG IN</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button
            style={{ position: "absolute", left: "100px", width: "150px" }}
            variant="outline-danger"
          >
            LOG iN
          </Button>
        </Form>
        <Form id="sign" className="sign_form">
          <h1 style={{ color: "#e8716d" }}>SIGN UP</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="name" placeholder="Enter FullName" />
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button
            style={{ position: "absolute", left: "100px", width: "150px" }}
            variant="outline-danger"
          >
            SIGN Up{" "}
          </Button>
        </Form>
      </div>
    );
  }
}

export default Mainapage;
