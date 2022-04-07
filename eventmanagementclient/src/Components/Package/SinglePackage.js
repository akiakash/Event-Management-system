import { Container } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import NavBar from "../../Layout/NavBar";
import { Button } from "@mui/material";
import "./package.css";
import { IoFastFoodSharp, IoTelescope } from "react-icons/io5";
import { compose } from "@mui/system";

function SinglePackage() {
  let PackageDetails = JSON.parse(sessionStorage.getItem("PackageDetails"));
  console.log("PackageDetails", PackageDetails);

  let a = false;
  let b = false;
  let c = false;
  let d = false;
  let e = false;

  const MasterChefFoodsPricefun = () => {
    a = true;
    console.log("a : ", a);
  };

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
            <h1>{PackageDetails.name}</h1>
            <h3>{PackageDetails.includes}</h3>
            <h3>Rs {PackageDetails.price}/night</h3>
          </div>
          <div>
            <h1>Overview</h1>
            <p>
              Duration : 03 Nights / 05 Days
              <br /> description : {PackageDetails.description}
              <br />
              Language : English
            </p>
          </div>
        </div>
        <div>
          <h2>Add Extra features</h2>
          <div className="row">
            {a == "true" ? (
              <div
                onClick={() => MasterChefFoodsPricefun()}
                style={{
                  border: "1px solid #000",
                  width: "200px",
                  height: "140px",
                  borderRadius: 10,
                  marginRight: 15,
                  background: "#c4ffc7",
                }}
                className="crd"
              >
                <center>
                  <h3>Master chef foods</h3>
                  <h4>RS {PackageDetails.MasterChefFoodsPrice}</h4>
                </center>
              </div>
            ) : (
              <div
                onClick={() => MasterChefFoodsPricefun()}
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
                  <h4>RS {PackageDetails.MasterChefFoodsPrice}</h4>
                </center>
              </div>
            )}
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
                <h4>High Luxary Vechile Price</h4>
                <h4>Rs {PackageDetails.HighLuxaryVechilePrice}</h4>
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
                <h4>Per Extra One Day Price</h4>
                <h4>Rs {PackageDetails.PerExtraOneDayPrice}</h4>
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
                <h4>Per Extra Bed Price</h4>
                <h4>Rs {PackageDetails.PerExtraBedPrice}</h4>
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
                <h4>Rent Camera Price</h4>
                <h4>Rs {PackageDetails.RentCameraPrice}</h4>
              </center>
            </div>
          </div>
        </div>
        <div>
          <input type="date" className="input"></input>
          <input type="text" placeholder="Location" className="input" />
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
          <h2 style={{ paddingTop: "30px", fontSize: "35px" }}>
            Total Bill - Rs 30,0000
          </h2>
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
