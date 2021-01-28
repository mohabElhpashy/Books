// import "./Mainpage.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import book from "../../imgs/books.jpg";
import test from "../../imgs/five.jpg";

// import pic from "../../imgs/Capture.PNG";

import "./Content.css";
import { Form, Button, Navbar, FormControl, Card } from "react-bootstrap";

class Content extends Component {
  state = {
    flag: false,
    tittle: [
      "The Love Square",
      "The Love Square",
      "The Love Square",
      "The Love Square",
      "The Love Square",
      "The Love Square",
      "The Love Square",
    ],
    card_text: ["one", "two", "three", "four", "five", "six", "seven"],
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
    const mapping = this.state.tittle.map((index, tittlee) => {
      return (
        <div className="divcontent">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={test}
              style={{ width: "288px", height: "250px" }}
              id="card"
            />
            <Card.Body>
              <Card.Title>{index}</Card.Title>
              <hr />
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="danger">+</Button>
              <span class="rate-this-stars">
                <h5>Rate this page</h5>
                <ol class="rate-this-stars-list">
                  <li class="star" value="5"></li>
                  <li class="star" value="4"></li>
                  <li class="star" value="3"></li>
                  <li class="star" value="2"></li>
                  <li class="star" value="1"></li>
                </ol>
              </span>
            </Card.Body>
          </Card>
        </div>
      );
    });
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
              color: "#0000FF ",
            }}
          >
            LOG OuT !
          </h5>
        </div>
        {mapping}
      </div>
    );
  }
}

export default Content;
