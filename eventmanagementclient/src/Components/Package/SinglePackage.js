import { Container } from "@mui/material";
import React from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { Button } from "@mui/material";
import './package.css'
import { IoFastFoodSharp } from 'react-icons/io5';

function SinglePackage() {
  return (
    <div>
      <NavBar />
      <img src="./Assets/Images/Package01.png" width={"100%"} />
      <Container>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h1>Sigiriya family</h1>
            <h3>950, Sigiriya, Srilanka</h3>
            <h3>Rs 6800/night</h3>
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
        <div>
          <h2>Add Extra features</h2>
          <div className="row" >
            <div
              style={{
                border: "1px solid #000",
                width: "200px",
                height: "140px",
                borderRadius: 10,
                marginRight: 15,
              }}

              className="crd"
            >
              <center>
                <h3>Master chef foods</h3>
                <h4>RS 10000</h4>
              </center>
            </div>
            <div
              style={{
                border: "1px solid #000",
                width: "200px",
                height: "140px",
                borderRadius: 10,
                marginRight: 15,
              }}
              className="crd"
            >
              <center >
              <IoFastFoodSharp  size={45}/>
                <h4 > MASTER CHEF FOODS</h4>
                <h4 >10 $</h4>
               
              </center>
            </div>
            <div
              style={{
                border: "1px solid #000",
                width: "200px",
                height: "140px",
                borderRadius: 10,
                marginRight: 15,
              }}
              className="crd"
            >
              <center>
                <h3>Per Extra one day</h3>
                <h4>RS 10000</h4>
              </center>
            </div>
            <div
              style={{
                border: "1px solid #000",
                width: "200px",
                height: "140px",
                borderRadius: 10,
                marginRight: 15,
              }}
              className="crd"
            >
              <center>
                <h3>Rent Camera</h3>
                <h4>RS 10000</h4>
              </center>
            </div>
            <div
              style={{
                border: "1px solid #000",
                width: "200px",
                height: "140px",
                borderRadius: 10,
                marginRight: 15,
              }}
              className="crd"
            >
              <center>
                <h3>Per Extra bed </h3>
                <h4>RS 10000</h4>
              </center>
            </div>
          </div>
        </div>
        <div>
          <input type="date" className="input"></input>
          <input type="text" placeholder="Location"  className="input"/>
          <select name="Adult " id="Adult " className="select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="Adult " id="Adult " className="select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="Adult " id="Adult " className="select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <h2 style={{paddingTop:"30px",fontSize:"35px"}}>Total Bill - Rs 30,0000</h2>
        </div>
        <center style={{ margin: 20 }}>
          <Button variant="outlined" style={{ marginRight: 10 }}>
            Cancel
          </Button>
          <Button variant="contained">
            <a
              href="/BookPackage"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Reserve !
            </a>
          </Button>
        </center>
      </Container>
      <Footer />
    </div>
  );
}

export default SinglePackage;
