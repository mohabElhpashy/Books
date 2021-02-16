// import "./Mainpage.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import book from "../../imgs/books.jpg";
import test from "../../imgs/five.jpg";

// import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Modal from "react-awesome-modal";
import { BsPersonFill, BsFillHeartFill } from "react-icons/bs";
import { BiMenu, BiLogOut } from "react-icons/bi";

import "./Content.css";
import { Form, Button, Navbar, FormControl, Card } from "react-bootstrap";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      flag: false,
      visible: false,
      index: 0,
      data: [
        {
          tittle: ["The Love Square"],
          card_index: ["one"],
          rate: ["1", "2", "3", "4", "5"],
        },
        {
          tittle: ["how to make a deal"],
          card_index: ["one"],
          rate: ["1", "2", "3", "4", "5"],
        },
        {
          tittle: ["how to make a deal 2"],
          card_index: ["one"],
          rate: ["1", "2", "3", "4", "5"],
        },
        {
          tittle: ["how to make a deal 3"],
          card_index: ["one"],
          rate: ["1", "2", "3", "4", "5"],
        },
        {
          tittle: ["how to make a deal 4"],
          card_index: ["one"],
          rate: ["1", "2", "3", "4", "5"],
        },
        {
          tittle: ["how to make a deal 5"],
          card_index: ["one"],
          rate: ["1", "2", "3", "4", "5"],
        },
      ],
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

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
  ratefun = (index) => {
    // document.getElementById(buttonindex).style.backgroundImage =
    //   "url(/images/starcolored.jpg)";
  };

  openModal = (index) => {
    this.setState({
      visible: true,
      index: index,
    });
  };

  construc = (name, age, salary) => {
    this.name = name;
    this.age = age;
    this.salary = salary;
  };
  closeModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log("===>", this.state.data[5].tittle);

    const mapping = this.state.data.map((dta, index) => {
      return (
        <div className="divcontent">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={test}
              style={{ width: "288px", height: "250px" }}
              id="card"
              onClick={this.openModal.bind(this, index)}
            />
            <Card.Body>
              <Card.Title>{dta.tittle}</Card.Title>
              <hr />
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                // onClick={this.cardindex.bind(this, tittle)}
                variant="danger"
                style={{ position: "relative", left: "200px" }}
                // onClick={() => this.openModal(this, index)}
              >
                +
              </Button>
              {dta.rate.map((rate, index) => {
                return (
                  <div class="rate-this-stars">
                    <button></button>
                  </div>
                );
              })}
            </Card.Body>
            <Modal
              className="modal"
              visible={this.state.visible}
              width="50%"
              // height="350px"
              effect="fadeInUp"
              style={{ opacity: "0.2" }}
              onClickAway={() => this.closeModal()}
            >
              <div className="info_about_book">
                <div>
                  <img src={test} alt="book" />
                </div>
                <div>
                  <h3>{this.state.data[this.state.index].tittle}</h3>
                  <p></p>
                </div>
              </div>
              {dta.rate.map((rate, index) => {
                return (
                  <div class="rate-this-starss">
                    <button></button>
                  </div>
                );
              })}
              <Button
                // onClick={this.cardindex.bind(this, tittle)}
                variant="primary"
                style={{ position: "relative", left: "350px" }}
                // onClick={() => this.openModal(this, index)}
              >
                DownLoad
              </Button>
            </Modal>
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
          <Navbar.Brand className="books">BooKs</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Navbar.Brand
            className="profile"
            style={{ position: "absolute", left: "1250px" }}
            onClick={this.showDivinfo}
          >
            <BiMenu width="500px" />
          </Navbar.Brand>
        </Navbar>

        <div className="divinfo" id="divInf">
          <h3>
            <span style={{ borderRadius: "50px", border: "0px solid white" }}>
              <BsPersonFill />
            </span>
            Mohab_Elhbashy
          </h3>
          <p>See your profile</p>
          <hr />
          <h4>
            my favourite
            <span>
              <BsFillHeartFill />
            </span>
          </h4>
          <hr />
          <h4>All reviews</h4>
          <hr />

          <h5
            style={{
              // letterSpacing: "10px",
              position: "absolute",
              top: "325px",
              left: "100px",
            }}
          >
            LOG OuT
            <span>
              <BiLogOut />
            </span>
          </h5>
        </div>
        {mapping}
      </div>
    );
  }
}

export default Content;

/* <Popup
          width="200px"
          height="500px"
          trigger={<button> Trigger</button>}
          position="right center"
        >
          <div>Popup content here !!</div>
        </Popup> */
