// import { Container } from "@mui/material";
// import React, { useState } from "react";
// import Footer from "../../Layout/Footer";
// import NavBar from "../../Layout/NavBar";
// import { TextField } from "@mui/material";
// import { Button } from "@mui/material";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import axios from "axios";

// function FoodBook() {
//   let FoodDetail = JSON.parse(sessionStorage.getItem("FoodDetail"));
//   console.log(FoodDetail);

//   return (
//     <div>
//       <NavBar />
//       <Container>
//         <center style={{ padding: 50 }}>
//           <h2>Regisatation Form</h2>
//           <Form>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 Airline Name
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="text"
//                   defaultValue={flightDetails.AirlineName}
//                   disabled
//                   placeholder="Event Name"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 From Location
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="text"
//                   defaultValue={flightDetails.FromLocation}
//                   disabled
//                   placeholder="Event Name"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 To Location
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="text"
//                   defaultValue={flightDetails.ToLocation}
//                   disabled
//                   placeholder="Event Name"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 NoOfSeats
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="number"
//                   onChange={(e) => PriceCaculation(e.target.value)}
//                   placeholder="NoOfSeats"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 First Name
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="text"
//                   onChange={(e) => setFirstName(e.target.value)}
//                   placeholder="First Name"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 Last Name
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="text"
//                   onChange={(e) => setLastName(e.target.value)}
//                   placeholder="Last Name"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 Email
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Last Name"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 Contact Number
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="number"
//                   onChange={(e) => setContactnumber(e.target.value)}
//                   placeholder="Contact Number"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 Passport Number
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="text"
//                   onChange={(e) => setPassportNumber(e.target.value)}
//                   placeholder="Passport Number"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 Nic Number
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="text"
//                   onChange={(e) => setNicNumber(e.target.value)}
//                   placeholder="Nic Number"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 Address
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control
//                   type="text"
//                   onChange={(e) => setAddress(e.target.value)}
//                   placeholder="Address"
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3" controlId="">
//               <Form.Label column sm={2} />
//               <Form.Label column sm={3}>
//                 Price
//               </Form.Label>
//               <Col sm={4}>
//                 <Form.Control type="text" value={check} placeholder="Price" />
//               </Col>
//             </Form.Group>
//             <center>
//               <div className="button">
//                 <input
//                   type="button"
//                   onClick={FlightBooking}
//                   value={"SUBMIT"}
//                   className="btn btn-block app-sidebar__heading Login-Button"
//                 />
//               </div>
//             </center>
//           </Form>
//         </center>
//       </Container>
//       <Footer />
//     </div>
//   );
// }

// export default FoodBook;
