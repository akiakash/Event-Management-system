import React, { useState, useEffect } from "react";
import axios from "axios";

function FlightEdit() {
  const [AirlineName, setAirlineName] = useState("");
  const [FromLocation, setFromLocation] = useState("");
  const [ToLocation, setToLocation] = useState("");
  const [Price, setPrice] = useState("");
  const [NoOfSeats, setNoOfSeats] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contactnumber, setContactnumber] = useState("");
  const [PassportNumber, setPassportNumber] = useState("");
  const [NicNumber, setNicNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [flight, setFlight] = useState([]);

  const id = window.sessionStorage.getItem("FlightID");

  useEffect(() => {
    axios.get(`http://localhost:3000/FlightBooking/${id}`).then((response) => {
      //   console.log(response.data);
      setNoOfSeats(response.data.NoOfSeats);
      setFirstName(response.data.FirstName);
      setLastName(response.data.LastName);
      setEmail(response.data.Email);
      setContactnumber(response.Contactnumber);
      setPassportNumber(response.PassportNumber);
      setNicNumber(response.NicNumber);
      setAddress(response.Address);
      setContactnumber(response.data);
      setFlight(response.data);
      console.log(response.data);
    });
  }, []);

  function updateFlight() {
    axios
      .patch(`http://localhost:3000/FlightBooking/${id}`, {
        AirlineName: AirlineName,
        FromLocation: FromLocation,
        ToLocation: ToLocation,
        NoOfSeats: NoOfSeats,
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Contactnumber: Contactnumber,
        PassportNumber: PassportNumber,
        NicNumber: NicNumber,
        Address: Address,
        Price: Price,
        Status: status,
      })
      .then((response) => {
        setLoading(false);

        // window.location.reload();
        window.location("/User");
      })
      .catch((error) => {
        setLoading(false);
        alert("Sorry, Something Error...");
      });
  }

  return (
    <div>
      <form>
        <label>
          Air Line Name:
          <input type="text" name="name" />
        </label>
        <br></br>

        <br></br>
        <label>
          From Location:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          No of Seats:
          <input
            type="number"
            name="name"
            defaultValue={flight.NoOfSeats}
            onChange={(e) => setNoOfSeats(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          First Name:
          <input
            type="text"
            name="name"
            defaultValue={flight.FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="name"
            defaultValue={flight.LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="name"
            defaultValue={flight.Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="name"
            defaultValue={flight.Contactnumber}
            onChange={(e) => setContactnumber(e.target.value)}
          />
        </label>
        <label>
          PAssport Number:
          <input
            type="text"
            name="name"
            defaultValue={flight.PassportNumber}
            onChange={(e) => setPassportNumber(e.target.value)}
          />
        </label>
        <label>
          NIC Number:
          <input
            type="text"
            name="name"
            defaultValue={flight.NicNumber}
            onChange={(e) => setNicNumber(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="name"
            defaultValue={flight.Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        <br></br>
        <input type="submit" value="Submit" onClick={updateFlight} />
      </form>
    </div>
  );
}

export default FlightEdit;
