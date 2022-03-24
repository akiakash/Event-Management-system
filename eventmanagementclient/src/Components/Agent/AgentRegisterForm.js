import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function AgentRegisterForm() {
  return (
    <div>
      <NavBar />
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
          label="Address"
          variant="standard"
          style={{ width: "400px" }}
        />
        <br />
        <TextField
          id="standard-basic"
          label="NIC"
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
      <Footer />
    </div>
  );
}

export default AgentRegisterForm;
