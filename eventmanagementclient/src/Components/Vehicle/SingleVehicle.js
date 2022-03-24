import { Container } from "@mui/material";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { Button } from "@mui/material";

function SingleVehicle() {
  return (
    <div>
      <NavBar />
      <Container>
        <div style={{}}>
          <div className="row">
            <div>
              <img
                src="./Assets/Images/Vehicle.png"
                alt="SingleVehicle"
                width={"600px"}
              />
            </div>
            <div>
              <h2>Maserati</h2>
              <div className="row" style={{ margin: 10 }}>
                <div>Seats - </div>
                <div> 5 Seats</div>
              </div>
              <div className="row" style={{ margin: 10 }}>
                <div>Cooling - </div>
                <div>Air Conditioning</div>
              </div>
              <div className="row" style={{ margin: 10 }}>
                <div>Gear</div>
                <div>Manual gearbox</div>
              </div>
              <div className="row" style={{ margin: 10 }}>
                <div>Air Bags - </div>
                <div>3 Large bags</div>
              </div>
              <div className="row" style={{ margin: 10 }}>
                <div>Fuel - </div>
                <div>Full to Full</div>
              </div>
              <div className="row" style={{ margin: 10 }}>
                <div>Mileage - </div>
                <div>Unlimited mileage</div>
              </div>
            </div>
          </div>
          <div>
            <h2>Additional</h2>
            <div className="row">
              <div>Driver - Available</div>
              <div>Children Sheat - 2</div>
              <div>GPS - True</div>
            </div>
          </div>
        </div>
        <center style={{ margin: 20 }}>
          <Button variant="outlined" style={{ marginRight: 10 }}>
            Cancel
          </Button>
          <Button variant="contained">
            <a
              href="/BookVehicle"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Register
            </a>
          </Button>
        </center>
      </Container>
      <Footer />
    </div>
  );
}

export default SingleVehicle;
