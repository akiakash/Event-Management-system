import React, { useState, useEffect } from "react";
import Footer from "../Layout/Footer";
import axios from "axios";
import NavBar from "../Layout/NavBar";

function User() {
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
      {agent.map((item) => (
        <table style={{ width: "50px", border: "20px black " }}>
          <td>Agent</td>
          <tr>
            <th>{item.AgentFirstName}</th>
          </tr>
          <tr>
            <td>{item.AgentLastName}</td>
          </tr>

          <tr>
            <td>{item.ContactNumber}</td>
          </tr>
          <tr>
            <td>{item.EMail}</td>
          </tr>
        </table>
      ))}

      <hr></hr>
      {/* Event bookings */}
      {event.map((item) => (
        <table style={{ width: "50px", border: "20px black " }}>
          <td>Event</td>
          <tr>
            <th>{item.EventName}</th>
          </tr>
          <tr>
            <td>{item.FirstName}</td>
          </tr>

          <tr>
            <td>{item.LastName}</td>
          </tr>
          <tr>
            <td>{item.Email}</td>
          </tr>
        </table>
      ))}

      <hr></hr>
      {/* flight Bookigs */}
      {flight.map((item) => (
        <table style={{ width: "50px", border: "20px black " }}>
          <td>flight</td>
          <tr>
            <th>{item.AirlineName}</th>
          </tr>
          <tr>
            <td>{item.FromLocation}</td>
          </tr>

          <tr>
            <td>{item.ToLocation}</td>
          </tr>
          <tr>
            <td>{item.NoOfSeats}</td>
          </tr>
        </table>
      ))}

      <hr></hr>
      {/* Food Bookigs */}
      {food.map((item) => (
        <table style={{ width: "50px", border: "20px black " }}>
          <td>FOOd</td>
          <tr>
            <th>{item.FoodName}</th>
          </tr>
          <tr>
            <td>{item.Quantity}</td>
          </tr>

          <tr>
            <td>{item.Price}</td>
          </tr>
          <tr>
            <td>{item.FirstName}</td>
          </tr>
        </table>
      ))}

      <hr></hr>
      {/* hotel Bookigs */}
      {hotel.map((item) => (
        <table style={{ width: "50px", border: "20px black " }}>
          <td>hotel</td>
          <tr>
            <th>{item.HotelName}</th>
          </tr>
          <tr>
            <td>{item.TotalMembers}</td>
          </tr>

          <tr>
            <td>{item.NoOfChild}</td>
          </tr>
          <tr>
            <td>{item.NoOfBed}</td>
          </tr>
        </table>
      ))}

      <hr></hr>
      {/* package Bookigs */}
      {packages.map((item) => (
        <table style={{ width: "50px", border: "20px black " }}>
          <td>package</td>
          <tr>
            <th>{item.PackageName}</th>
          </tr>
          <tr>
            <td>{item.PackagePrice}</td>
          </tr>

          <tr>
            <td>{item.FirstName}</td>
          </tr>
          <tr>
            <td>{item.LastName}</td>
          </tr>
        </table>
      ))}

      <hr></hr>
      {/* package Bookigs */}
      {vehicle.map((item) => (
        <table style={{ width: "50px", border: "20px black " }}>
          <td>Vehicle</td>
          <tr>
            <th>{item.VegicleCategory}</th>
          </tr>
          <tr>
            <td>{item.VehicleModel}</td>
          </tr>

          <tr>
            <td>{item.NoOfDays}</td>
          </tr>
          <tr>
            <td>{item.Email}</td>
          </tr>
        </table>
      ))}
      <Footer />
    </div>
  );
}

export default User;
