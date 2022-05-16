import React, { useState, useEffect } from "react";
import Footer from "../Layout/Footer";

import axios from "axios";
import NavBar from "../Layout/NavBar";

function User() {
  // EditAgent
  function editAgent(_id) {
    console.log("Agent" + _id);
    window.sessionStorage.setItem("AgentID", _id);
    window.location("/AgentUpdate");
  }

  function deleteAgent(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/AgentBooking/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Your Date Successfully Deleted...!");
    });
  }

  //EditEvent

  function editEvent(_id) {
    console.log("Event" + _id);
    window.sessionStorage.setItem("EventID", _id);
    window.location("/AgentUpdate");
  }

  function deleteEvent(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/EventBooking/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Your Date Successfully Deleted...!");
    });
  }

  //EditFlight

  function editFlight(_id) {
    console.log("Flight" + _id);
    window.sessionStorage.setItem("FlightID", _id);
    window.location("/FlightEdit");
  }

  function deleteFlight(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/FlightBooking/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Your Date Successfully Deleted...!");
    });
  }

  //EditFood

  function editFood(_id) {
    console.log("Food" + _id);
    window.sessionStorage.setItem("FoodID", _id);
    window.location("/FoodEdit");
  }

  function deleteFood(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/FoodsBooking/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Your Date Successfully Deleted...!");
    });
  }

  //EditHotel
  function editHotel(_id) {
    console.log("Food" + _id);
    window.sessionStorage.setItem("HotelID", _id);
    window.location("/HotelEdit");
  }

  function deleteHotel(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/HotelBooking/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Your Date Successfully Deleted...!");
    });
  }

  //packageedit

  function editPackage(_id) {
    console.log("Package" + _id);
    window.sessionStorage.setItem("PackageID", _id);
    window.location("/PackageEdit");
  }

  function deletePackage(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/PackageBooking/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Your Date Successfully Deleted...!");
    });
  }

  //editVehicle

  function editVehicle(_id) {
    console.log("Vehicle" + _id);
    window.sessionStorage.setItem("VehicleID", _id);
    window.location("/VehicleEdit");
  }

  function deleteVehicle(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/VehicleBooking/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Your Date Successfully Deleted...!");
    });
  }

  const [agent, setAgent] = useState([]);
  const [event, setEvent] = useState([]);
  const [flight, setFlight] = useState([]);
  const [food, setFood] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [packages, setPackage] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  const getRequest = () => {
    axios.get("http://localhost:3000/AgentBooking").then((response) => {
      setAgent(response.data);
    });
    axios.get("http://localhost:3000/EventBooking").then((response) => {
      setEvent(response.data);
    });
    axios.get("http://localhost:3000/FlightBooking").then((response) => {
      setFlight(response.data);
    });
    axios.get("http://localhost:3000/FoodsBooking").then((response) => {
      setFood(response.data);
    });
    axios.get("http://localhost:3000/HotelBooking").then((response) => {
      setHotel(response.data);
    });
    axios.get("http://localhost:3000/PackageBooking").then((response) => {
      setPackage(response.data);
    });

    axios.get("http://localhost:3000/VehicleBooking").then((response) => {
      setVehicle(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [agent]);

  useEffect(() => {
    getRequest();
  }, [event]);

  useEffect(() => {
    getRequest();
  }, [event]);

  useEffect(() => {
    getRequest();
  }, [food]);

  useEffect(() => {
    getRequest();
  }, [hotel]);

  useEffect(() => {
    getRequest();
  }, [packages]);

  useEffect(() => {
    getRequest();
  }, [vehicle]);

  return (
    <div>
      {/* agent bookings */}
      <NavBar />
      <center>
        <td style={{ fontSize: "50px" }}>Agent</td>
      </center>
      <table style={{ border: "20px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Agent First Name</th>
          <th style={{ border: "1px solid #dddddd" }}> Agent last Name</th>
          <th style={{ border: "1px solid #dddddd" }}>First Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Last Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Contact Number</th>
          <th style={{ border: "1px solid #dddddd" }}>Email</th>
          <th style={{ border: "1px solid #dddddd" }}>Delete</th>
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {agent.map((item) => (
          <tr>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.AgentFirstName}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.AgentLastName}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>{item.FirstName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.LastName}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.ContactNumber}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Email}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              <button onClick={() => deleteAgent(item._id)}>Delete</button>
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              <a href="/AgentEdit">
                <button onClick={() => editAgent(item._id)}>edit</button>
              </a>
            </td>
          </tr>
        ))}
      </table>

      <hr></hr>
      {/* Event bookings */}
      <center>
        <td style={{ fontSize: "50px" }}>Event</td>
      </center>
      <table style={{ border: "20px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>EventName</th>
          <th style={{ border: "1px solid #dddddd" }}>FirstName</th>
          <th style={{ border: "1px solid #dddddd" }}>LastName</th>
          <th style={{ border: "1px solid #dddddd" }}>Email</th>
          <th style={{ border: "1px solid #dddddd" }}>Contact Number</th>
          <th style={{ border: "1px solid #dddddd" }}>Delete</th>
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {event.map((item) => (
          <tr>
            <th style={{ border: "1px solid #dddddd" }}>{item.EventName}</th>
            <td style={{ border: "1px solid #dddddd" }}>{item.FirstName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.LastName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Email}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.Contactnumber}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              <button onClick={() => deleteEvent(item._id)}>Delete</button>
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              <a href="/EventEdit">
                <button onClick={() => editEvent(item._id)}>edit</button>
              </a>
            </td>
          </tr>
        ))}
      </table>

      <hr></hr>
      {/* flight Bookigs */}
      <center>
        <td style={{ fontSize: "50px" }}>Flight</td>
      </center>
      <table style={{ border: "20px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Airline Name</th>
          <th style={{ border: "1px solid #dddddd" }}>From Location</th>
          <th style={{ border: "1px solid #dddddd" }}>To Location</th>
          <th style={{ border: "1px solid #dddddd" }}>No Of Seats</th>
          <th style={{ border: "1px solid #dddddd" }}>First Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Last Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Email</th>
          <th style={{ border: "1px solid #dddddd" }}>Contact Number</th>
          <th style={{ border: "1px solid #dddddd" }}>Passport Number</th>
          <th style={{ border: "1px solid #dddddd" }}>Nic Number</th>
          <th style={{ border: "1px solid #dddddd" }}>Address</th>
          <th style={{ border: "1px solid #dddddd" }}>Price</th>
          <th style={{ border: "1px solid #dddddd" }}>Delete</th>
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {flight.map((item) => (
          <tr>
            <th style={{ border: "1px solid #dddddd" }}>{item.AirlineName}</th>
            <td style={{ border: "1px solid #dddddd" }}>{item.FromLocation}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.ToLocation}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.NoOfSeats}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.FirstName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.LastName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Email}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.Contactnumber}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.PassportNumber}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>{item.NicNumber}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Address}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Price}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              <button onClick={() => deleteFlight(item._id)}>Delete</button>
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              <a href="/FlightEdit">
                <button onClick={() => editFlight(item._id)}>edit</button>
              </a>
            </td>
          </tr>
        ))}
      </table>

      <hr></hr>
      {/* Food Bookigs */}
      <center>
        <td style={{ fontSize: "50px" }}>Food</td>
      </center>
      <table style={{ border: "20px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Food Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Quantity</th>
          <th style={{ border: "1px solid #dddddd" }}>Price</th>
          <th style={{ border: "1px solid #dddddd" }}>First Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Last Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Contact Number</th>
          <th style={{ border: "1px solid #dddddd" }}>Email</th>
          <th style={{ border: "1px solid #dddddd" }}>Delete</th>
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {food.map((item) => (
          <tr>
            <th style={{ border: "1px solid #dddddd" }}>{item.FoodName}</th>
            <td style={{ border: "1px solid #dddddd" }}>{item.Quantity}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Price}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.FirstName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.LastName}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.ContactNumber}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Email}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              <button onClick={() => deleteFood(item._id)}>Delete</button>
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              <a href="/FoodEdit">
                <button onClick={() => editFood(item._id)}>edit</button>
              </a>
            </td>
          </tr>
        ))}
      </table>

      <hr></hr>
      {/* hotel Bookigs */}
      <center>
        <td style={{ fontSize: "50px" }}>Hotel</td>
      </center>
      <table style={{ border: "20px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Hotel Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Total Members</th>
          <th style={{ border: "1px solid #dddddd" }}>No of Child</th>
          <th style={{ border: "1px solid #dddddd" }}>NO of Bed</th>
          <th style={{ border: "1px solid #dddddd" }}>A/c</th>
          <th style={{ border: "1px solid #dddddd" }}>First Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Last Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Email</th>
          <th style={{ border: "1px solid #dddddd" }}>Contact Number</th>
          <th style={{ border: "1px solid #dddddd" }}>Price</th>
          <th style={{ border: "1px solid #dddddd" }}>Delete</th>
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {hotel.map((item) => (
          <tr>
            <th style={{ border: "1px solid #dddddd" }}>{item.HotelName}</th>
            <td style={{ border: "1px solid #dddddd" }}>{item.TotalMembers}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.NoOfChild}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.NoOfBed}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.AC}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.FirstName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.LastName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Email}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.Contactnumber}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Price}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              <button onClick={() => deleteHotel(item._id)}>Delete</button>
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              <a href="/HotelEdit">
                <button onClick={() => editHotel(item._id)}>edit</button>
              </a>
            </td>
          </tr>
        ))}
      </table>

      <hr></hr>
      {/* package Bookigs */}
      <center>
        <td style={{ fontSize: "50px" }}>Package</td>
      </center>
      <table style={{ border: "20px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Package Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Package Price</th>
          <th style={{ border: "1px solid #dddddd" }}>First Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Last Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Email</th>
          <th style={{ border: "1px solid #dddddd" }}>Contactnumber</th>
          <th style={{ border: "1px solid #dddddd" }}>Delete</th>
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {packages.map((item) => (
          <tr>
            <th style={{ border: "1px solid #dddddd" }}>{item.PackageName}</th>
            <td style={{ border: "1px solid #dddddd" }}>{item.PackagePrice}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.FirstName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.LastName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Email}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.Contactnumber}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              <button onClick={() => deletePackage(item._id)}>Delete</button>
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              <a href="/PackageEdit">
                <button onClick={() => editPackage(item._id)}>edit</button>
              </a>
            </td>
          </tr>
        ))}
      </table>

      <hr></hr>
      {/* Vehicle Bookigs */}
      <center>
        <td style={{ fontSize: "50px" }}>Vehicle</td>
      </center>
      <table style={{ border: "20px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Vehicle Category</th>
          <th style={{ border: "1px solid #dddddd" }}>Vehicle Model</th>
          <th style={{ border: "1px solid #dddddd" }}>No of Days</th>
          <th style={{ border: "1px solid #dddddd" }}>First Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Last Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Email</th>
          <th style={{ border: "1px solid #dddddd" }}>Contact Number</th>
          <th style={{ border: "1px solid #dddddd" }}>Price</th>
          <th style={{ border: "1px solid #dddddd" }}>Delete</th>
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {vehicle.map((item) => (
          <tr>
            <th style={{ border: "1px solid #dddddd" }}>
              {item.VegicleCategory}
            </th>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.VegicleCategory}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>{item.VehicleModel}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.NoOfDays}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.FirstName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.LastName}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Email}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              {item.Contactnumber}
            </td>
            <td style={{ border: "1px solid #dddddd" }}>{item.Price}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              <button onClick={() => deleteVehicle(item._id)}>Delete</button>
            </td>
            <td style={{ border: "1px solid #dddddd" }}>
              <a href="/VehicleEdit">
                <button onClick={() => editVehicle(item._id)}>edit</button>
              </a>
            </td>
          </tr>
        ))}
      </table>
      <Footer />
    </div>
  );
}

export default User;
