import React, { useState, useEffect } from "react";
import axios from "axios";

function HotelEdit() {
  const [TotalMembers, setTotalMembers] = useState(0);
  const [NoOfChild, setNoOfChild] = useState(0);
  const [NoOfBed, setNoOfBed] = useState(0);
  const [AC, setAC] = useState("flase");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Contactnumber, setContactnumber] = useState("");
  const [Price, setPrice] = useState();
  const [Email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [hotel, setHotel] = useState([]);

  const id = window.sessionStorage.getItem("HotelID");

  useEffect(() => {
    axios.get(`http://localhost:3000/HotelBooking/${id}`).then((response) => {
      //   console.log(response.data);
      setTotalMembers(response.data.TotalMembers);
      setNoOfChild(response.data.NoOfChild);
      setNoOfBed(response.data.NoOfBed);
      setAC(response.data.AC);
      setFirstName(response.data.FirstName);
      setLastName(response.data.LastName);
      setContactnumber(response.data.Contactnumber);
      setPrice(response.data.Price);
      setEmail(response.data.Email);
      setHotel(response.data);
      console.log(response.data);
    });
  }, []);

  function updateHotel() {
    axios
      .patch(`http://localhost:3000/HotelBooking/${id}`, {
        TotalMembers: TotalMembers,
        NoOfChild: NoOfChild,
        NoOfBed: NoOfBed,
        AC: AC,
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Contactnumber: Contactnumber,
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
          Hotel Name:
          <input type="text" name="name" />
        </label>
        <br></br>

        <br></br>
        <label>
          Total members:
          <input
            type="text"
            name="name"
            defaultValue={hotel.TotalMembers}
            onChange={(e) => setTotalMembers(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          No OF Child:
          <input
            type="text"
            name="name"
            defaultValue={hotel.NoOfChild}
            onChange={(e) => setNoOfChild(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          NO of BEd:
          <input
            type="text"
            name="name"
            defaultValue={hotel.NoOfBed}
            onChange={(e) => setNoOfBed(e.target.value)}
          />
        </label>
        <label>
          AC:
          <input
            type="text"
            name="name"
            defaultValue={hotel.AC}
            onChange={(e) => setAC(e.target.value)}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="name"
            defaultValue={hotel.FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="name"
            defaultValue={hotel.LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="name"
            defaultValue={hotel.Contactnumber}
            onChange={(e) => setContactnumber(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="name"
            defaultValue={hotel.Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {/* <label>
          Contact Number:
          <input
            type="text"
            name="name"
            defaultValue={event.Contactnumber}
            onChange={(e) => setContactnumber(e.target.value)}
          />
        </label> */}

        <br></br>
        <input type="submit" value="Submit" onClick={updateHotel} />
      </form>
    </div>
  );
}

export default HotelEdit;
