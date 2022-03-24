import { Container } from "@mui/material";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Agent() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <NavBar />
      <Container>
        <center>
          <img
            src="./Assets/Images/agent.png"
            alt="image"
            width={"600px"}
            style={{ marginTop: 50, marginBottom: 50 }}
          />
          <p>
            Trip SL Pvt. Ltd is a subsidiary of Problem Solver, one of the
            biggest hotel chains in Colombo. The Problem Solver founded in 2020
            has two years provided impeccable service and outstanding
            hospitality. Trip SL Pvt. Ltd built on this strong foundation aims
            to provide great customer satisfaction and an exemplary holiday
            experience. Planning a once in a lifetime holiday or a yearly
            corporate retreat? No problem! Trip SL can get you what you want and
            in the minimal time. One of the best destination management
            companies in Sri Lanka , it has the experience and infrastructure to
            handle any customer demand. In addition to destination management,
            Trip SL also plans Event , Package , Flight Booking , Agent Booking,
            Vehicle Rental , Hotel Reservation and much, much more
          </p>
        </center>
        <div>
          <h2>Our Best Guide</h2>
          <div class="row">
            <div className="card_Agent">
              <div className="card-img">
                <div className="card-img-background">
                  <img
                    className="image"
                    src="https://picsum.photos/id/1005/5760/3840"
                  />
                </div>
                <div className="profile">
                  <p className="name" />
                  <a
                    href="/AgentSingleProfile"
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    <h3>Peter Griffin</h3>
                  </a>
                  <p />
                </div>
                <div className="summary">
                  <p>
                    Age - 50 <br />
                    Language - Tamil <br />
                    Distric - Jaffna <br />
                    COntact Number - 077 1234566
                  </p>
                  <p>
                    <Typography component="legend">Rating</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="card_Agent">
              <div className="card-img">
                <div className="card-img-background">
                  <img
                    className="image"
                    src="https://picsum.photos/id/1005/5760/3840"
                  />
                </div>
                <div className="profile">
                  <p className="name" />
                  <h3>Peter Griffin</h3>
                  <p />
                </div>
                <div className="summary">
                  <p>
                    Age - 50 <br />
                    Language - Tamil <br />
                    Distric - Jaffna <br />
                    COntact Number - 077 1234566
                  </p>
                  <p>
                    <Typography component="legend">Rating</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Agent;
