import { Button, Container } from "@mui/material";

import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import "./event.css";
import axios from "axios";
import { useState } from "react";

function SingleEvent() {
  const ID = sessionStorage.getItem("eventId");
  console.log(ID);

  const [eventDetail, setEventDetail] = useState("");

  axios
    .get(`http://localhost:3000/EventManagement/${ID}`)
    .then((response) => {
      setEventDetail(response.data);
      console.log("displayed", eventDetail);
    })
    .catch((error) => {
      console.log("error message", error.data);
    });

  return (
    <div>
      <NavBar />

      <div>
        <div>
          <div className="containerr">
            {eventDetail
              ? eventDetail.map((item) => (
                  <div>
                    <img
                      component="img"
                      height="140"
                      src={item.Imge}
                      alt="green iguana"
                    />

                    <div className="text-block">
                      <div className="text1">{item.EvntName}</div>
                      <div className="text1">{item.Destination}</div>

                      <div className="text1">{item.StartingTime}</div>
                    </div>
                  </div>
                ))
              : "null"}
          </div>
          {/* <center>

            

              <div
                style={{
                  border: "1px solid #000",
                  borderRadius: 10,
                  marginTop:"40px",
                  // filter: "blur(8px)",
                  width:"00px"
                }}
              >
                <h2>Sid Sriram music cocert</h2>
                <h4>Location - Colombo</h4>
                <h4>Date - 22-04-2022</h4>
              </div>
            </center> */}
          <div>
            <Container>
              <h3 style={{ font: "20px" }}>Overview</h3>
              <p>
                Duration : 18:00 onwards <br />
                Destinations : Colombo(BMICH)
                <br /> Language : English
              </p>
            </Container>
          </div>
          <center style={{ margin: 20 }}>
            <Button variant="outlined" style={{ marginRight: 10 }}>
              Cancel
            </Button>
            <Button variant="contained">
              <a href="/EventRegisterForm">Register</a>
            </Button>
          </center>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SingleEvent;
