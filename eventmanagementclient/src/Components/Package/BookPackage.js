import React, { useEffect, useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { Container } from "@mui/material";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

function BookPackage() {
  let PackageDetails = JSON.parse(sessionStorage.getItem("PackageDetails"));
  console.log("PackageDetails", PackageDetails);
  let packagePrice = sessionStorage.getItem("packagePrice");
  console.log("packagePrice", packagePrice);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Contactnumber, setContactnumber] = useState("");
  const [Email, setEmail] = useState("");

  const booking = () => {
    console.log("PackageName : ", PackageDetails.name);
    console.log("PackagePrice : ", packagePrice);
    console.log("FirstName : ", FirstName);
    console.log("LastName : ", LastName);
    console.log("Contactnumber : ", Contactnumber);
    console.log("Email : ", Email);

    if (
      FirstName == "" ||
      LastName == "" ||
      Contactnumber == "" ||
      Email == ""
    ) {
      console.log("error01");
      alert("Please fill all required Fields");
    } else {
      axios
        .post(`http://localhost:3000/PackageBooking`, {
          PackageName: PackageDetails.name,
          PackagePrice: packagePrice,
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Contactnumber: Contactnumber,
        })
        .then((res) => {
          console.log(res.data);
          alert("Flight Tickets have been Successfully Booked...!");
          window.location.reload(true);
        })
        .catch((error) => {
          console.log(error.data);
        });
    }
  };

  return (
    <div>
      <NavBar />
      <center style={{ padding: 50 }}>
        <Container>
          <Form>
            <center>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  PackageName
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    defaultValue={PackageDetails.name}
                    disabled
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Total Price
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    defaultValue={packagePrice}
                    disabled
                    placeholder="TotalMembers"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  First Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Last Name
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Email
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="">
                <Form.Label column sm={2} />
                <Form.Label column sm={3}>
                  Contactnumber
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    type="text"
                    onChange={(e) => setContactnumber(e.target.value)}
                    placeholder="Contactnumber"
                  />
                </Col>
              </Form.Group>
              <center>
                <div className="button">
                  <input
                    type="button"
                    onClick={booking}
                    value={"SUBMIT"}
                    className="btn btn-block app-sidebar__heading Login-Button"
                  />
                </div>
              </center>
            </center>
          </Form>
        </Container>
      </center>
      <Footer />
    </div>
  );
}

export default BookPackage;
