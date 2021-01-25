// import "./Mainpage.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import book from "../../imgs/books.jpg";
// import pic from "../../imgs/pic.jpg";

import "./Content.css";
// import { Form, Button, Navbar, FormControl } from "react-bootstrap";

class Content extends Component {
  // state = {
  //   flag: false,
  // };
  // showDivinfo = () => {
  //   if (this.state.flag === false) {
  //     document.getElementById("divInf").style.height = "560px";
  //     this.setState({ flag: true });
  //   }
  //   if (this.state.flag) {
  //     document.getElementById("divInf").style.height = "0";
  //     this.setState({ flag: false });
  //   }
  // };
  render() {
    return (
      <div>
        content page
        {/* <Navbar bg="dark" variant="dark">
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
          <img
            src={pic}
            alt="profile_pic"
            style={{
              width: "6.5%",
              position: "absolute",
              left: "1270px",
              borderRadius: "15px",
            }}
            onClick={this.showDivinfo}
          />
        </Navbar>

        <div className="divinfo" id="divInf"></div> */}
      </div>
    );
  }
}

export default Content;
