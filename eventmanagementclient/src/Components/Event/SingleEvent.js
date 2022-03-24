import { Button, Container } from "@mui/material";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";

function SingleEvent() {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <img
            src="./Assets/Images/EventBackground.png"
            alt="Image"
            width={"100%"}
            height={"500px"}
          />
          <Container>
            <center>
              <div
                style={{
                  border: "1px solid #000",
                  borderRadius: 10,
                  // filter: "blur(8px)",
                }}
              >
                <h2>Sid Sriram music cocert</h2>
                <h4>Location - Colombo</h4>
                <h4>Date - 22-04-2022</h4>
              </div>
            </center>
            <div>
              <h3>Overview</h3>
              <p>
                Duration : 18:00 onwards <br />
                Destinations : Colombo(BMICH)
                <br /> Language : English
              </p>
            </div>
            <center style={{ margin: 20 }}>
              <Button variant="outlined" style={{ marginRight: 10 }}>
                Cancel
              </Button>
              <Button variant="contained">
                <a href="/EventRegisterForm">Register</a>
              </Button>
            </center>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleEvent;
