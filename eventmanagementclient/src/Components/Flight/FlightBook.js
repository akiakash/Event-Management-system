import { Container } from "@mui/material";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function FlightBook() {
  return (
    <div>
      <NavBar />
      <Container>
        <center style={{ padding: 50 }}>
          <h2>Regisatation Form</h2>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Address Line 01"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Address Line 02"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="City"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="State"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="ZIP Code"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="NIC Number"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Contact Number"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Email Address"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Adults"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Children"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Room Preference"
            variant="standard"
            style={{ width: "400px" }}
          />
          <br />
          <p>Check In Date</p>
          <p>Check out Date</p>
          <p>Check In Time</p>
          <p>Check out Time</p>
          <p>No of Adult</p>
          <p>No of Child</p>
          <p>Total Bill</p>
          <div style={{ padding: 20 }}>
            <Button variant="outlined" style={{ marginRight: 10 }}>
              Cancel
            </Button>
            <Button variant="contained">
              <a
                href="/EventRegisterForm"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Register
              </a>
            </Button>
          </div>
        </center>
      </Container>
      <Footer />
    </div>
  );
}

export default FlightBook;
