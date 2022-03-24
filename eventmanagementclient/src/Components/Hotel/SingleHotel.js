import { Container } from "@mui/material";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { Button } from "@mui/material";

function SingleHotel() {
  return (
    <div>
      <div>
        <NavBar />
        <img src="./Assets/Images/Package01.png" width={"100%"} />
        <Container>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <h1>Hotel Kandyan Reach</h1>
              Kandy road,Kurunegala
              <br />
              Hotel Kandyan Reach
              <br />
              4 Nights 5 Days
              <br />
            </div>
            <div>
              <h1>Overview</h1>
              <p>
                Duration : 03 Nights / 05 Days
                <br /> Destinations : Airport – Sigiriya
                <br />
                Language : English
              </p>
            </div>
          </div>
          <center style={{ margin: 20 }}>
            <Button variant="outlined" style={{ marginRight: 10 }}>
              Cancel
            </Button>
            <Button variant="contained">
              <a
                href="/HotelReserve"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Reserve !
              </a>
            </Button>
          </center>
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export default SingleHotel;
