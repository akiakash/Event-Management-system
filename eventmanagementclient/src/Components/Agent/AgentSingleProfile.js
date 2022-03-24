import { Container } from "@mui/material";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import Button from "@mui/material/Button";

function AgentSingleProfile() {
  return (
    <div>
      <NavBar />

      <Container>
        <div className="row">
          <div>
            <img
              className="image02"
              src="https://picsum.photos/id/1005/5760/3840"
              alt="profileImage"
            />
          </div>
          <div>
            <p>
              {" "}
              ID - 001TG <br />
              Age - 20 <br />
              Contact - 0775656560 <br />
              Language - English , Tamil
              <br />
              Email - Vandu001@gmail.com
              <br /> Description - I was born in Ampara and grew up in Texas,
              with Cuban and Basque roots. A trip to Spain to visit family the
              summer before my senior year of high school planted a seed of
              insatiable wanderlust, leading to a career in luxury travel. I
              focus on unique and custom travel itineraries and advise clients
              on luxury travel and off the beaten path experiences. As a luxury
              travel advisor, I'm able to leverage relationships with the best
              global luxury hotels, boutique hotels, villas, reputable &
              award-winning tour guides, private transportation, cruise lines
              and yacht/plane charters to ensure your experience is
              unforgettable. Let me VIP you with complimentary upgrades, resort
              credits, and other services that are hard to get on one's own.Less
            </p>
          </div>
        </div>

        <center style={{ margin: 20 }}>
          <Button variant="outlined" style={{ marginRight: 10 }}>
            Cancel
          </Button>
          <Button variant="contained">
            <a
              href="/AgentRegisterForm"
              style={{ color: "#fff", textDecoration: "none" }}
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

export default AgentSingleProfile;
