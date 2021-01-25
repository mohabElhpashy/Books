// import "./Mainpage.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import book from "../../imgs/books.jpg";
import pic from "../../imgs/Capture.PNG";

import "./Content.css";
import { Form, Button, Navbar, FormControl } from "react-bootstrap";

class Content extends Component {
  state = {
    flag: false,
  };
  showDivinfo = () => {
    if (this.state.flag === false) {
      document.getElementById("divInf").style.height = "360px";
      this.setState({ flag: true });
    }
    if (this.state.flag) {
      document.getElementById("divInf").style.height = "0";
      this.setState({ flag: false });
    }
  };
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              style={{
                width: "cover",
                backgroundColor: "black",
                height: "70px",
                opacity: "0.5",
                borderRadius: "15px",
              }}
              src={book}
              alt="book"
            />
          </Navbar.Brand>
          <Navbar.Brand>BooKs</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Navbar.Brand
            className="profile"
            style={{ position: "absolute", left: "1250px" }}
            onClick={this.showDivinfo}
          >
            Profile
          </Navbar.Brand>
        </Navbar>

        <div className="divinfo" id="divInf">
          <h3>Mohab_Elhbashy</h3>
          <hr />
          <h5
            style={{
              letterSpacing: "10px",
              position: "absolute",
              top: "325px",
              left: "100px",
              color: "#B22222",
            }}
          >
            LOG OuT !
          </h5>
        </div>
      </div>
    );
  }
}

export default Content;
