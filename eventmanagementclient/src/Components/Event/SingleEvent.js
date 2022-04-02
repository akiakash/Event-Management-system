import { Button, Container } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import './event.css';



function SingleEvent() {
  return (
    <div>
      <NavBar />
      
      <div>
        
        <div>
      
          <div className="containerr">
          <img
            src="./anii.webp  "
            alt="Image"
            width={"100%"}
            height={"500px"}
            
          />
        
        <div class="text-block">
          <div className="text1">Sid Sriram music cocert
         </div>
          <div className="text1" >
          Location - Colombo
         </div>
        
          <div className="text1" >
         
          Date - 22-04-2022</div>
          </div>
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
            
              <h3 style={{font:"20px"}}>Overview</h3>
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
